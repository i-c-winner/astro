class Websocket {
  private ws: WebSocket|null=null;
  private readonly listeners: {
    [key: string]: ((args: any[])=>void)[]
  }={}
  private name: string;
  private id: number;
  constructor() {
    this.ws = null
    this.name='VASYA'
    this.id=Math.floor(Math.random()*10000)
  }
  init(url: string) {
    this.ws=new WebSocket(url)
    this.createListeners()
}
  createListeners() {
    if (this.ws) this.ws.onmessage = (event: MessageEvent) => {
      const message = JSON.parse(event.data)
      if (message.from !==this.id) {
        this.emit('onmessage', JSON.parse(event.data));
      } else if (message.type === "error") {
        new Error(message.typeload)
      }
    }
   if (this.ws) this.ws.onopen = () => {
      this.emit("wsOpen");
      console.log("Websocket opened");
    }
  }
  sendMessage(message: { type: string, payload: any }) {
    console.log(message, "SEND MESSAFGWE")
   if(this.ws) this.ws.send(JSON.stringify({
     ...message,
     id: this.id,
     name:this.name,
   }));
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