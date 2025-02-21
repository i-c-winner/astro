import {Box} from "@mui/material";
import {AstroClient} from "../../astroAcaunt/module/AstroClient";
import {Client} from "../../client/module/Client";
import "../styles/accounts.scss"

function Accounts() {
  return <Box className="accounts">
    <AstroClient></AstroClient>
    <Client/>
  </Box>;
}

export {Accounts};
