import { PokemonGameConfig } from "../../../../internal";
import { UpdateConfigFn } from "../types";

export interface PokemonControlsProps {
  config: PokemonGameConfig;
  setConfig: UpdateConfigFn;
}
