class PeerConnection {
  private pc: RTCPeerConnection | null = null;
  private readonly listeners: {
    [key: string]: ((...args: any[]) => void)[];
  };

  public static instance: PeerConnection;
  private container: HTMLVideoElement=document.createElement('video');

  constructor() {
    if (!PeerConnection.instance) {
      PeerConnection.instance = this;
      this.pc = new RTCPeerConnection();
      this.listeners = {};
    }
    this.listeners = PeerConnection.instance.listeners;
    return PeerConnection.instance;
  }

  init(stream: MediaStream, type: "offer" | "answer", container: HTMLVideoElement) {
    this.container=container;
    this.pc = new RTCPeerConnection({
      iceServers: [
        {urls: "stun:stun.l.google.com:19302"}, // STUN-сервер Google
      ],
    });
    this.createListeners();
    stream.getTracks().forEach((track: MediaStreamTrack) => {
      if (this.pc) this.pc.addTrack(track);
    });
    if (type === "offer") this.createOffer();
  }

  createListeners() {
    if (this.pc) {
      this.pc.onicecandidate = (event) => {
        if (event.candidate !== null) {
          console.info(`Received ${event.candidate}`);
          this.emit("sendMessage", {
            type: "icecandidate",
            payload: event.candidate
          });
        }
      };
      this.pc.ontrack = (event) => {
        this.container.srcObject=event.streams[0]
      }
    }
  }

  createOffer() {
    if (this.pc) {
      this.pc.createOffer().then(offer => {
        if (this.pc) this.pc.setLocalDescription(offer).then(() => {
          this.emit("sendMessage", {
            type: "offer",
            payload: offer
          });
        });
      });
    }
  }

  handleAnswer(answer: RTCSessionDescriptionInit) {
    if (this.pc) {
      this.pc.createAnswer().then((answer) => {
        if (this.pc) this.pc.setLocalDescription(answer).then(() => {
          this.emit("sendMessage", {
            type: "answer",
            payload: answer,
          });
        });
      });
    }
  }

  handleOffer(offer: RTCSessionDescription) {
    if (this.pc) {
      this.pc.setRemoteDescription(new RTCSessionDescription(offer))
        .then(() => this.pc?.createAnswer())
        .then((answer) => {
          if (!answer) {
            throw new Error("Unable to create answer for offer");
          }
          return this.pc?.setLocalDescription(answer);
        })
        .then(() => {
          this.emit("sendMessage", {
            type: "answer",
            payload: this.pc?.localDescription
          });
        })
        .catch(error => console.error("Ошибка обработки offer:", error));
    }
  }

  handleIceCandidate(iceCandidate: RTCIceCandidateInit) {
    if (this.pc) this.pc.addIceCandidate(iceCandidate).then(() => {
      console.info("remote IceCandidate", iceCandidate);
    });
  }

  addListener(name: TListenersForMediator, listener: ((...args: any[]) => void)): void {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(listener);
  }

  emit(name: TListenersForMediator, ...args: any[]) {
    if (!this.listeners[name]) {
      console.error(`Фунция ${name}отсутствует`);
    }
    this.listeners[name].forEach(listener => {
      listener(...args);
    });
  }
}

export {PeerConnection};