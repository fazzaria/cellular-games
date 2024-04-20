import { AllHTMLAttributes } from "react";

export type DrawFn = (frameCount: number) => void;

export interface CanvasProps {
  canvasAttributes: AllHTMLAttributes<HTMLCanvasElement>;
}
