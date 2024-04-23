import { nanoid } from "nanoid";
import { CellSetupConfig } from "../../internal";

class Cell {
  constructor({ canvasX, canvasY, x, y }: CellSetupConfig) {
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.x = x;
    this.y = y;
    this.id = nanoid();
  }
  canvasX: number;
  canvasY: number;
  config: { [key: string]: any };
  currentColor: string;
  id: string;
  nextColor: string;
  x: number;
  y: number;
  setCurrentColor(newColor: string) {
    this.currentColor = newColor;
  }
  setNextColor(newColor: string) {
    this.nextColor = newColor;
  }
}

export default Cell;
