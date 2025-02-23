import {Card as CardBox, CardContent, CardHeader} from "@mui/material";
import "../styles/card.scss";
import React from "react";
import {AccountCard} from "./AccountCard";
import {TCards} from "../types/types";
import {AccountTitle} from "../../../entites/acauntTitle/module/AccountTitle";


const cards: { [key in TCards]: React.JSX.Element } = {
  accountCard: <AccountCard/>
};
const baseClassName = "card ";

function Card(props: {
                className?: string,
                type: TCards
              }
) {
  const className = props.className ? baseClassName + props.className : baseClassName;

  return <CardBox
    className={className}
  >
    <AccountTitle title="Elena Ctopia"/>
    <CardContent
    classes={{
      root: 'card-body',
    }}
    >
      {cards[props.type]}
    </CardContent>
  </CardBox>;
}

export {Card};
