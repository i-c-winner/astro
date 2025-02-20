import {useEffect} from "react";
import {Acaunts} from "../../../widgets/acaunts/module/module/Acaunts";
import {Box} from "@mui/material";
import "../styles/Lcab.scss"
import {Conference} from "../../../widgets/conference/module/Conference";
import {Zodiac} from "../../../widgets/zodiac/module/Zodiac";

function Lcab() {
  return <Box
  className="lcab"
  >
    <Conference />
    <Zodiac />
    <Acaunts />

  </Box>
}

export {Lcab}
