import "../styles/circleButton.scss";
import {Button} from "@mui/material";
import {ReactComponent as Icon} from "../../../shared/assets/images/scorpio.svg";

function CircleButton(props: {
  className?: string,
  icon?: any
}) {

  const baseClassName = "circle-button ";
  const className = props.className ? baseClassName + props.className : baseClassName;
  return <div className={className}>
    <Button
      disabled={true}
      endIcon={<Icon/>}
    >

    </Button>
  </div>;
}

export {CircleButton};
