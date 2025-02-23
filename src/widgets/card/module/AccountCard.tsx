import {Box, Typography} from "@mui/material";
import React from "react";
import {CircleButton} from "../../../entites/circleButton/module/CircleButton";
import scorpio from "../../../shared/assets/images/scorpio.svg"

console.info(scorpio, 'SCORPIO')

function AccountCard(){
  const icon=<img src={scorpio}>
  </img>
  return <React.Fragment>
      <CircleButton icon={icon} className={"circle-button__little"}/>
    <ul className="card-body__list">
      <li className="card-body__item">
        <Typography variant="astro">Знак зодиака: </Typography>
        <Typography variant="astro">Стрелец </Typography>
      </li>
      <li className="card-body__item">
        <Typography variant="astro">Информация: </Typography>
        <Typography variant="astro">Какая то </Typography>
      </li>
      <li className="card-body__item">
        <Typography variant="astro">Информация: </Typography>
        <Typography variant="astro">Какая то </Typography>
      </li>
      <li className="card-body__item">
        <Typography variant="astro">Информация: </Typography>
        <Typography variant="astro">Какая то </Typography>
      </li>
      <li className="card-body__item">
        <Typography variant="astro">Информация: </Typography>
        <Typography variant="astro">Какая то </Typography>
      </li>
    </ul>
  </React.Fragment>
}
export {AccountCard}
