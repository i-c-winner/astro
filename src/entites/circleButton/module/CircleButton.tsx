import "../styles/circleButton.scss";
import {Button} from "@mui/material";

function CircleButton(props: {
  className?: string,
  icon: React.ReactNode,
}) {

  const baseClassName = "circle-button ";
  const className = props.className ? baseClassName + props.className : baseClassName;
  return <div className={className}>
    <Button
      disabled={true}
      endIcon={props.icon}
    >

    </Button>
  </div>;
}

export {CircleButton};
