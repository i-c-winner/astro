class PeerConnection {
  private pc: RTCPeerConnection;
  private readonly listeners: {
    [key: string]: ((...args: any[]) => void)[];
  };

  constructor() {
    this.pc = new RTCPeerConnection();
    this.listeners = {};
  }

  init() {
    this.pc = new RTCPeerConnection({
      iceServers: [
        {urls: "stun:stun.l.google.com:19302"}, // STUN-сервер Google
      ],
    });
    this.createListeners();
  }

  createListeners() {
    this.pc.onicecandidate = (event) => {
      if (event.candidate !== null) {
        console.info(`Received ${event.candidate}`);
        this.handleIceCandidate(event.candidate);
      }

    };
  }

  addTrack(track: MediaStreamTrack, stream?: MediaStream) {
    if (stream) {
      this.pc.addTrack(track, stream);
    } else {
      this.pc.addTrack(track);
    }
    this.createOffer();
  }

  createOffer() {
    this.pc.createOffer().then(offer => {
      this.pc.setLocalDescription(offer).then(() => {
        this.emit("sendMessage", "offer", offer);
      });
    });
  }

  createAnswer(answer: RTCSessionDescriptionInit) {
    this.pc.createAnswer(answer).then(() => {
      this.pc.setLocalDescription(answer).then(() => {
        this.emit("sendMessage", "answer", answer);
      });
    });
  }

  handleOffer(offer: RTCSessionDescription) {
    this.pc.setRemoteDescription(new RTCSessionDescription(offer))
      .then(() => this.pc.createAnswer())
      .then((answer) => this.pc.setLocalDescription(answer))
      .then(() => {
        this.emit("answer",{
          type: "answer",
          payload: this.pc.localDescription
        })
      })
      .catch(error => console.error("Ошибка обработки offer:", error));

  }

  handleAnswer(answer: RTCSessionDescriptionInit) {
    this.pc.setRemoteDescription(new RTCSessionDescription(answer)).then(() => {
    });
  }

  handleIceCandidate(iceCandidate: RTCIceCandidateInit) {
    this.pc.addIceCandidate(iceCandidate).then(() => {
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