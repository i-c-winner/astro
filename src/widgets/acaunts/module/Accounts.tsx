import {Box, Button} from "@mui/material";
import {Card} from "../../card/module/Card";
import "../styles/accounts.scss";
import {Screen} from "../../screen/module/Screen";
import {useRef, useState} from "react";
import {Mediator} from "../../../features/BL/mediator/mediator";

const mediator = new Mediator();


function Accounts() {
  const [connected, setConnected] = useState<boolean>(false);
  const refContainer=useRef<HTMLVideoElement|null>(null)
  function start() {
    setConnected(true);
    if (refContainer.current) {
      const container = refContainer.current as HTMLVideoElement;
      navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream) => {
        mediator.setData(stream, container, "answer");
      });
    }
  }


  return <Box className="accounts">
    <Screen ref={refContainer} stream={null}></Screen>
    <Button disabled={connected} onClick={start} variant="contained">Start</Button>
    <Card className="card__client" type="accountCard"></Card>
  </Box>;
}

export {Accounts};
