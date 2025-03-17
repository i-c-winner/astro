import {Box} from "@mui/material";
import "../styles/screen.css"
import {Ref, useEffect, useRef} from "react";

function Screen (props: {stream: MediaStream|null, ref: Ref<HTMLVideoElement>}) {
  const refElement=useRef<HTMLVideoElement|null>(null);

  useEffect(() => {
    if (refElement.current && props.stream) {
      refElement.current.srcObject=props.stream;
    }
  }, [props.stream]);

  return <Box className="screen" >
    <video ref={props.ref} autoPlay={true}  className="video" />
  </Box>
}
export {Screen};