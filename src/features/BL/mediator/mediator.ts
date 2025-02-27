class Mediator {
  private pc: RTCPeerConnection;
  public listeners: {
    [name: string ]: ((...args: any[]) => void)[]
  };
  private wss: WebSocket;

  constructor() {
    this.pc = new RTCPeerConnection();
    this.wss = new WebSocket("wss://astroserver-o6m8.onrender.com");
    this.wss.onopen = () => {
      this.submit("wssIsOpen", true);
    };
    this.listeners={}
  }
  closeWebSocket() {
    this.wss.close();
    this.submit("wssIsOpen", false);
  }

  createPeerConnection() {
    this.pc = new RTCPeerConnection({
      iceServers: [{urls: "stun:stun.l.google.com:19302"}]
    });
  }

  subscribe(name: TListenersForMediator, listener: (args: any[]) => void) {
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