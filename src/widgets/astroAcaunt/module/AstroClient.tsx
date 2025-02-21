import {Box, Typography} from "@mui/material";
import {AccountTitle} from "../../../entites/acauntTitle/module/AccountTitle";
import "../styles/astroclient.scss"
function AstroClient () {
  return <Box className="astro-client">
      <AccountTitle />
    </Box>
}
export {AstroClient};
