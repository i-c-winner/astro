import {Typography} from "@mui/material";
import React from "react";
import scorpio from "../../../shared/assets/images/scorpio.svg"

console.info(scorpio, 'SCORPIO')

function AccountCard(){
  return <React.Fragment>
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
