import {useEffect, useRef, useState} from "react";
import {Box, Button} from "@mui/material";
import "../styles/astrolog.scss";
import {Card} from "../../card/module/Card";
import {Screen} from "../../screen/module/Screen";


function Astrolog() {
  const wss = useRef<WebSocket | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const pc = useRef<RTCPeerConnection>(null);

  console.info("createConnection");

  function createConnection() {
    if (wss.current) {
      wss.current.onmessage = (message) => {
        console.info(JSON.stringify(message), "Message");
      };
    }
  }

  function closeConnection() {
    if (wss.current) {
      wss.current.close(1000, "Closed connection");
    }
  }

  function openConference() {
    navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(stream => {
     setStream(stream as MediaStream);
      if (pc.current) {
        stream.getTracks().forEach(track => {
          pc.current?.addTrack(track);
        });
        pc.current.onicecandidate = (event) => {
          if (event.candidate) {
            wss.current?.send(JSON.stringify({target: "ddf", candidate: event.candidate}));
          }
        };
      }
    });
  }

  useEffect(() => {

  }, []);

  useEffect(() => {

  }, []);

  return (
    <Box className="conference">
      <Screen stream={stream}/>
      <Button onClick={createConnection} aria-label="Name" title="Create connection">Создать встречу</Button>
      <Button onClick={closeConnection} aria-label="Create connection">Close</Button>
      <Button onClick={openConference}>Open conference</Button>
      <Card className="card__client" type="accountCard"/>
    </Box>
  );
}

export {Astrolog};
