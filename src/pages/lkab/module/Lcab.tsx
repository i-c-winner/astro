import {useEffect} from "react";
import {Accounts} from "../../../widgets/acaunts/module/Accounts";
import {Box} from "@mui/material";
import "../styles/Lcab.scss"
import {Conference} from "../../../widgets/conference/module/Conference";
import {Zodiac} from "../../../widgets/zodiac/module/Zodiac";
import zodiac from '../../../shared/assets/images/astro.jpg'

function Lcab() {
  return <Box
  className="lcab"
  sx={{
    backgroundImage: `url(${zodiac})`,
  }}
  >
    <Conference />
    <Zodiac />
    <Accounts />

  </Box>
}

export {Lcab}
