import { CANVAS_ID } from "../../const";

const getContext = () => {
  const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d") ?? null;
  return ctx;
};

export default getContext;
