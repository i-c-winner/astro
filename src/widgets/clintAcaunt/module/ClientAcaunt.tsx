import {Box, Typography} from "@mui/material";
import {AcauntTitle} from "../../../entites/acauntTitle/module/AcauntTitle";

function ClientAcaunt() {
  return <Box className="client-acaunt">
    <AcauntTitle />
    <Typography>My Client</Typography>
  </Box>
}
export {ClientAcaunt};
