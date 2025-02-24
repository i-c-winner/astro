import {Avatar, CardHeader, Typography} from "@mui/material";
import "../styles/accountTitle.scss"
import React from "react";

function AccountTitle (props: {
  icon?: React.JSX.Element;
  title: string
}) {
  return <React.Fragment>
    <CardHeader
      avatar={<Avatar className="title__avatar"  ></Avatar>}
      className="accountTitle"
      title={  <Typography variant="astro">{props.title}</Typography>}
    >

    </CardHeader>
  </React.Fragment>
}
export  {AccountTitle}
