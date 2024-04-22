import getCanvasElement from "./getCanvasElement";
import getContext from "./getContext";

const clearCanvas = () => {
  const canvas = getCanvasElement();
  const ctx = getContext();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export default clearCanvas;
