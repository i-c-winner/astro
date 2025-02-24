import {Accounts} from "../../../widgets/acaunts/module/Accounts";
import {Box} from "@mui/material";
import "../styles/lcab.scss";
import {Astrolog} from "../../../widgets/astrolog/module/Astrolog";
import {Zodiac} from "../../../widgets/zodiac/module/Zodiac";
import {Header} from "../../../widgets/header/module/Header";

function Lcab() {
  return<Box className="lcab">
    <Header></Header>
    <Box
      className="wrapper"
    >
      <Astrolog/>
      <Zodiac/>
      <Accounts/>
    </Box>
  </Box>

}

export {Lcab};
