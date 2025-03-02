class Websocket {
  private ws: WebSocket|null=null;
  private readonly listeners: {
    [key: string]: ((args: any[])=>void)[]
  }={}
  constructor() {
        this.createListeners()
    this.ws = null
  }
  init(url: string) {
    this.ws=new WebSocket(url)
}
  createListeners() {
    if (this.ws) this.ws.onmessage = (event: MessageEvent) => {
      console.log(JSON.parse(event.data));
      this.emit('onmessage', JSON.parse(event.data));
    }
   if (this.ws) this.ws.onopen = () => {
      this.emit("wsOpen");
      console.log("Websocket opened");
    }
  }
  sendMessage(message: { type: string, payload: any }) {
   if(this.ws) this.ws.send(JSON.stringify(message));
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