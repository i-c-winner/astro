import {useEffect} from "react";
import {Accounts} from "../../../widgets/acaunts/module/Accounts";
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
    <Accounts />

  </Box>
}

export {Lcab}
