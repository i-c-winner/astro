import {Box, Typography} from "@mui/material";
import {AccountTitle} from "../../../entites/acauntTitle/module/AccountTitle";
import "../styles/astroclient.scss"
function AstroClient () {
  return <Box className="astro-client">
<ul>
  <li className="astro-client__item">
    <Typography variant="astro">Знак зодиака: </Typography>
    <Typography variant="astro">Стрелец </Typography>
  </li>
  <li className="astro-client__item">
    <Typography variant="astro">Информация: </Typography>
    <Typography variant="astro">Какая то </Typography>
  </li>
  <li className="astro-client__item">
    <Typography variant="astro">Информация: </Typography>
    <Typography variant="astro">Какая то </Typography>
  </li>
  <li className="astro-client__item">
    <Typography variant="astro">Информация: </Typography>
    <Typography variant="astro">Какая то </Typography>
  </li>
  <li className="astro-client__item">
    <Typography variant="astro">Информация: </Typography>
    <Typography variant="astro">Какая то </Typography>
  </li>
</ul>
    </Box>
}
export {AstroClient};
