import {Box} from "@mui/material";
import "../styles/screen.css"
import {useEffect, useRef} from "react";

function Screen (props: {stream: MediaStream|null}) {
  const refElement=useRef<HTMLVideoElement|null>(null);

  useEffect(() => {
    if (refElement.current && props.stream) {
      refElement.current.srcObject=props.stream;
    }
  }, [props.stream]);

  return <Box className="screen" >
    <video autoPlay={true} ref={refElement} className="video" />
  </Box>
}
export {Screen};