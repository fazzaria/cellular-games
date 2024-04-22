import { CanvasProps } from "./types";
import { useContext, useEffect } from "react";
import {
  GameContext,
  getCanvasSize,
  getContext,
  useCanvas,
} from "../../internal";

const Canvas = (props: CanvasProps) => {
  const { canvasAttributes } = props;
  const {
    grid,
    globalConfig: { throttleAmount },
  } = useContext(GameContext);

  useEffect(() => {
    if (grid && grid.ctx === null) {
      grid.ctx = getContext();
    }
  }, [grid]);

  const draw = (frameCount: number) => {
    if (frameCount % throttleAmount !== 0) return;
    grid?.update();
  };

  const canvasRef = useCanvas(draw);
  const { height, width } = getCanvasSize();

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      {...canvasAttributes}
    />
  );
};

export default Canvas;
