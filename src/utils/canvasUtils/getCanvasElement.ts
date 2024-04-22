import { CANVAS_ID } from "../../internal";

const getCanvasElement = () =>
  document.getElementById(CANVAS_ID) as HTMLCanvasElement;

export default getCanvasElement;
