class Websocket {
  private ws: WebSocket;
  private readonly listeners: {
    [key: string]: ((args: any[])=>void)[]
  };
  constructor(url: string) {
    this.ws= new WebSocket(url);
    this.createListeners()
    this.listeners={}
  }
  createListeners() {
    this.ws.onmessage = (event: MessageEvent) => {
      console.log(JSON.parse(event.data));
      this.emit('onmessage', JSON.parse(event.data));
    }
    this.ws.onopen = () => {
      this.emit("wsOpen");
      console.log("Websocket opened");
    }
  }
  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
    this.emit("messageWasSend", message);
  }
  addListener(name: TListenersForMediator, listener: (args: any) => void) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(listener);
  }
  emit (name: TListenersForMediator, ...args: any[]) {
    if (!this.listeners[name]) {
      console.error('Websocket unsupported listener "' + name + '"');
    } else {
      this.listeners[name].forEach(listener => {
        listener(args);
      })
    }
  }
}

export {Websocket};