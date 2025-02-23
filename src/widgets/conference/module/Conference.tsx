import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import {getRandomString} from "../../../features/plugins/getRandomString";
import "../styles/conference.scss";
import {Card} from "../../card/module/Card";
import {Screen} from "../../screen/module/screen";

function Conference() {
  const [isOpen, setIsOpen] = useState(false);
  const [roomName, setRoomName] = useState<string>(getRandomString(15));
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const jitsiAPI = useRef<any>(null);
  const refConference = useRef<HTMLDivElement>(null);

  function togglingOpen() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isOpen) {
      if (!scriptRef.current) {
        const script = document.createElement("script");
        script.src =
          "https://8x8.vc/vpaas-magic-cookie-c47db81113c24b2384a9e339c7775d56/external_api.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.JitsiMeetExternalAPI) {
            // @ts-ignore
            jitsiAPI.current = new window.JitsiMeetExternalAPI("8x8.vc", {
              roomName:
                `vpaas-magic-cookie-c47db81113c24b2384a9e339c7775d56/${roomName}`,
              parentNode: refConference.current,
            });
            jitsiAPI.current.addEventListener("videoConferenceLeft", handleJitsiLeft);
          } else {
            console.error("JitsiMeetExternalAPI не загружен");
          }
          console.log('%c JITSI','color: red; font-size: 25px',jitsiAPI.current)
        };
        document.body.appendChild(script);
        scriptRef.current = script;
      }
    } else {
      cleanupJitsi();
    }

    return () => {
      cleanupJitsi();
    };
  }, [isOpen]);

  function cleanupJitsi() {
    if (jitsiAPI.current) {
      jitsiAPI.current.removeEventListener("videoConferenceLeft", handleJitsiLeft);
      jitsiAPI.current.dispose();
      jitsiAPI.current = null;
    }
    if (refConference.current) {
      refConference.current.innerHTML = "";
    }
    if (scriptRef.current) {
      document.body.removeChild(scriptRef.current);
      scriptRef.current = null;
    }
  }

  function handleJitsiLeft() {
    console.log("Jitsi был закрыт пользователем");
    setIsOpen(false); // Закрываем конференцию
    setRoomName(getRandomString(15))
  }

  return (
    <Box className="conference">
      <Screen />
      <Card className="card__client" type="accountCard" />
    </Box>
  );
}

export { Conference };
