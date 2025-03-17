import {useEffect, useRef, useState} from "react";
import {Box, Button} from "@mui/material";
import "../styles/astrolog.scss";
import {Mediator} from "../../../features/BL/mediator/mediator";
import {Card} from "../../card/module/Card";
import {Screen} from "../../screen/module/Screen";

const mediator = new Mediator();


function Astrolog() {
  const [connected, setConnected] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const refContainer = useRef<HTMLVideoElement | null>(null);

  function start() {
    setConnected(true);
    if (refContainer.current) {
      const container = refContainer.current as HTMLVideoElement;
      navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream) => {
        mediator.setData(stream, container, "offer");
      })
    }
  }

  return (
    <Box className="conference">
        <Screen  ref={refContainer} stream={stream} />
      <Button disabled={connected} variant="contained" onClick={start} >Start</Button>
      <Card className="card__client" type="accountCard"></Card>
    </Box>
  );
}

export {Astrolog};