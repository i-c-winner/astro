import {AcauntTitle} from "../../../../entites/acauntTitle/module/AcauntTitle";
import {Box} from "@mui/material";
import {AstroClient} from "../../../astroAcaunt/module/AstroClient";
import {ClientAcaunt} from "../../../clintAcaunt/module/ClientAcaunt";

function Acaunts() {
  return <Box className="acaunts">
    <AstroClient></AstroClient>
    <ClientAcaunt/>
  </Box>;
}

export {Acaunts};
