import {PeerConnection as PeerCon} from "../peerConnection/peerConnection";
import {Websocket as Webs} from "../websocket/websocket";

class Mediator {
  private pc = new PeerCon();
  public listeners: {
    [name: string]: ((...args: any[]) => void)[]
  };
  private wss = new Webs();
  private stream: MediaStream;
  private container: HTMLVideoElement;
  private type: "offer" | "answer"="offer";

  constructor() {
    this.stream = new MediaStream();
    this.container = document.createElement("video");
    this.pc.addListener("sendMessage", this.sendMessage.bind(this));
    this.wss.addListener("wssIsOpen", this.wssOpened.bind(this));
    this.wss.addListener("onmessage", this.onMessage.bind(this));
    this.listeners = {};
  }

  setData(stream: MediaStream, container: HTMLVideoElement, type: "offer" | "answer"): void {
    this.wss.init("wss://astroserver-o6m8.onrender.com");
    this.stream = stream;
    this.container = container;
    this.type = type;
    this.wss.addListener("wsOpen", this.wssOpened.bind(this));
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
    this.pc.init(this.stream, this.type, this.container);
  }

  sendMessage(message: { type: string, payload: any }) {
    this.wss.sendMessage(message);
  }

  onMessage(data: { type: string, payload: any }[]) {
    const message=data[0]
    if (message.type === "offer"&&this.type === "answer") {
      const offer = message.payload as RTCSessionDescription;
      this.pc.handleOffer(offer);
    }
    if (message.type === "answer"&&this.type === "offer") {
      const answer = message.payload as RTCSessionDescription;
      this.pc.handleAnswer(answer);
    }
    if (message.type === "iceCandidate") {
      const iceCandidate = message.payload as RTCIceCandidate;
      this.pc.handleIceCandidate(iceCandidate)
    }
    console.log("onMessage received", message);
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