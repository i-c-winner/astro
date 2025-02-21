import "../style/zodiac.scss";
import {Box} from "@mui/material";
import {getNatalCard} from "../../../features/zodiac/natalcard/natalcard";
import {useEffect, useRef} from "react";

function Zodiac() {
  const isCalled = useRef<boolean>(false);
  const refZodiac = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refZodiac.current && !isCalled.current) {
      getNatalCard(refZodiac.current);
    }
    isCalled.current = true;
  }, []);
  return <Box ref={refZodiac} className="zodiac">Zodiac
  <div id="zodiac"></div></Box>;
}

export {Zodiac};
