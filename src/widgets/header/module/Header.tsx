import {Box, Card, Typography} from "@mui/material";
import {CircleButton} from "../../../entites/circleButton/module/CircleButton";
import {ReactComponent as Login} from "../../../shared/assets/images/login.svg"
import {ReactComponent as Logout} from "../../../shared/assets/images/logout.svg"
import "../styles/header.scss"

function Header() {
  return <Card className="header">
    <Box className="header__items">
      <Typography variant="astro" component="div">Home</Typography>
      <Typography variant="astro" component="div">Прогноз на день</Typography>
    </Box>
    <Box className="header__items">
      <Typography variant="astro" component="div">Комната</Typography>
     <CircleButton icon={<Login />} className="circle-button__login"/>
     <CircleButton icon={<Logout />} className="circle-button__login"/>
    </Box>


  </Card>
}
export {Header}