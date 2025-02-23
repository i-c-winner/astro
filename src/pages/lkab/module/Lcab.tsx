import {useEffect} from "react";
import {Accounts} from "../../../widgets/acaunts/module/Accounts";
import {Box} from "@mui/material";
import "../styles/Lcab.scss"
import {Astrolog} from "../../../widgets/astrolog/module/Astrolog";
import {Zodiac} from "../../../widgets/zodiac/module/Zodiac";

function Lcab() {
  return <Box
  className="lcab"
  >
    <Astrolog />
    <Zodiac />
    <Accounts />

  </Box>
}

export {Lcab}
