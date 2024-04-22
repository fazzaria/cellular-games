import { useRef, useEffect, useContext } from "react";
import { GameContext } from "../context";

const useCanvas = (draw: (frameCount: number) => void) => {
  const { paused } = useContext(GameContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount++;
      draw(frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };

    if (!paused) render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, paused]);

  return canvasRef;
};
export default useCanvas;
