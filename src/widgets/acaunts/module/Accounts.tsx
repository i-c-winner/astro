import {Box} from "@mui/material";
import {Card} from "../../card/module/Card";
import {AstroClient} from "../../astroAcaunt/module/AstroClient";
import {Client} from "../../client/module/Client";
import "../styles/accounts.scss"

function Accounts() {
  return <Box className="accounts">
    <>dd</>
    <Card className="card__client" type="accountCard"></Card>
  </Box>;
}

export {Accounts};
