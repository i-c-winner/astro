import "../style/zodiac.scss";
import {Box, Button, ButtonGroup} from "@mui/material";
import {getNatalCard} from "../../../features/zodiac/natalcard/natalcard";
import {ReactSketchCanvas, ReactSketchCanvasRef} from "react-sketch-canvas";
import React, {useEffect, useRef, useState} from "react";

function Zodiac() {
  const isCalled = useRef<boolean>(false);
  const refZodiac = useRef<HTMLDivElement>(null);
  const refWhiteBoard = useRef<ReactSketchCanvasRef|null>(null);
  const [eraseMode, setEraseMode] = useState(false);

  const handleEraserClick = () => {
    setEraseMode(true);
    refWhiteBoard.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    refWhiteBoard.current?.eraseMode(false);
  };

  const handleUndoClick = () => {
    refWhiteBoard.current?.undo();
  };

  const handleRedoClick = () => {
    refWhiteBoard.current?.redo();
  };

  const handleClearClick = () => {
    refWhiteBoard.current?.clearCanvas();
  };

  const handleResetClick = () => {
    refWhiteBoard.current?.resetCanvas();
  };
  useEffect(() => {
    if (refZodiac.current && !isCalled.current) {
      getNatalCard(refZodiac.current);
    }
    isCalled.current = true;
  const element=document.getElementById("react-sketch-canvas__canvas-background");
  console.dir(element);
 if(element) element.setAttribute('fill', 'none');
  }, [])

  return <Box ref={refZodiac} className="zodiac">
 <ButtonGroup>
    <Button
      disabled={!eraseMode}
      onClick={handlePenClick}
    >
      Pen
    </Button>
    <Button
      disabled={eraseMode}
      onClick={handleEraserClick}
    >
      Eraser
    </Button>
    <Button
      className="btn btn-sm btn-outline-primary"
      onClick={handleUndoClick}
    >
      Undo
    </Button>
    <Button
      onClick={handleRedoClick}
    >
      Redo
    </Button>
    <Button
      onClick={handleClearClick}
    >
      Clear
    </Button>
    <Button
      onClick={handleResetClick}
    >
      Reset
    </Button>
 </ButtonGroup>
  <div id="zodiac"></div>
    <ReactSketchCanvas
      className="white-board"
      ref={refWhiteBoard}
      strokeWidth={5}
      strokeColor="white" />
  </Box>;

}

export {Zodiac};
