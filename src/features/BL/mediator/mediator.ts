import {PeerConnection as PeerCon} from "../peerConnection/peerConnection";
import {Websocket as Webs} from "../websocket/websocket";

class Mediator {
  private pc = new PeerCon();
  public listeners: {
    [name: string]: ((...args: any[]) => void)[]
  };
  private wss = new Webs();
  private stream: MediaStream;
  private container: HTMLDivElement;


  constructor() {
    this.stream = new MediaStream();
    this.container = document.createElement("div");
    this.pc.addListener("sendMessage", this.sendMessage.bind(this));
    this.wss.addListener('wssIsOpen', this.wssOpened.bind(this));
    this.listeners = {};
  }

  setData(stream: MediaStream, container: HTMLDivElement): void {
    this.wss.init("wss://astroserver-o6m8.onrender.com")
    this.stream = stream;
    this.container = container;
    stream.getTracks().forEach((track) => {
      this.pc.addTrack(track, stream);
    });
  }

  closeWebSocket() {
    this.submit("wssIsOpen", false);
  }

  addPeerListener(name: TListenersForMediator, func: (...args: any[]) => void) {
    this.pc.addListener(name, func);
  }

  addWssListener(name: TListenersForMediator, func: (...args: any[]) => void) {
    this.wss.addListener(name, func);
  }

  wssOpened() {
    this.pc.init();
  }
  sendMessage(message: { type: string, payload: any }) {
    this.wss.sendMessage(message);
  }

  emit(name: TListenersForMediator, listener: (args: any[]) => void) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(listener);
  }

  submit(name: TListenersForMediator, ...args: any[]) {
    if (!this.listeners[name]) {
      console.error(`Фунция ${name}отсутствует`);
    } else {
      this.listeners[name].forEach(listener => {
        listener(args);
      });
    }

  }
}

export {Mediator};