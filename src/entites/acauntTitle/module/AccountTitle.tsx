import {Avatar, Box, Typography} from "@mui/material";
import "../styles/accountTitle.scss"

function AccountTitle () {
  return <Box className="accountTitle">
    <Avatar className="title__avatar" src="/avatar.jpg" ></Avatar>
    <Typography>Astro Lady</Typography>
  </Box>
}
export  {AccountTitle}
