import {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";
import "../styles/astrolog.scss";
import {Mediator} from "../../../features/BL/mediator/mediator";
import {Card} from "../../card/module/Card";
import {Screen} from "../../screen/module/Screen";


function Astrolog() {

  const [stream, setStream] = useState<MediaStream | null>(null);
  const refContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (refContainer.current) {
      const container = refContainer.current as HTMLDivElement;
      navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(stream => {
        setStream(stream);
        const mediator = new Mediator();
        mediator.setData(stream, container);
      });
    }

  });

  return (
    <Box className="conference">
      <Box ref={refContainer}>
      </Box>
      {/*<Screen ref={refContainer} stream={stream}/>*/}
      <Card className="card__client" type="accountCard"/>
    </Box>
  );
}

export {Astrolog};