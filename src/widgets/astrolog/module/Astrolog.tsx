import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import "../styles/astrolog.scss";
import {Card} from "../../card/module/Card";
import {Screen} from "../../screen/module/Screen";

function Astrolog() {

  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      audio: true, video: true
    }).then((stream) => {
      setStream(stream);
    });
  }, []);

  return (
    <Box className="conference">
      <Screen stream={stream}/>
      <Card className="card__client" type="accountCard"/>
    </Box>
  );
}

export {Astrolog};
