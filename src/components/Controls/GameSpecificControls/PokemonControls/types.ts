import { PokemonGameConfig } from "../../../../rulesets";
import { UpdateConfigFn } from "../types";

export interface PokemonControlsProps {
  config: PokemonGameConfig;
  setConfig: UpdateConfigFn;
}
