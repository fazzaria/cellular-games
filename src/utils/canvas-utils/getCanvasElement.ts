import { CANVAS_ID } from "../../const";

const getCanvasElement = () =>
  document.getElementById(CANVAS_ID) as HTMLCanvasElement;

export default getCanvasElement;
