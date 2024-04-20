import { Cell } from "../../classes";

export interface PokemonGameConfig {
  /* dragon types (and dragon-steel-fairy tricolor spirals) tend to dominate the screen,
     so an option is provided to disable them */
  disableDragon: boolean;
  /* the odds that a cell will turn into a random pokemon type rather than follow normal rules.
  prevents stagnation or types going extinct */
  randomMutationChance: number;
}

export const defaultPokemonConfig: PokemonGameConfig = {
  disableDragon: true,
  randomMutationChance: 750,
};

export interface PokemonCellConfig {
  currentType: PokemonType;
  nextType: PokemonType;
}

export type PokemonCell = Omit<Cell, "config"> & {
  config: PokemonCellConfig;
};

export enum PokemonType {
  NORMAL = "normal",
  FIRE = "fire",
  WATER = "water",
  ELECTRIC = "electric",
  GRASS = "grass",
  ICE = "ice",
  FIGHTING = "fighting",
  POISON = "poison",
  GROUND = "ground",
  FLYING = "flying",
  PSYCHIC = "psychic",
  BUG = "bug",
  ROCK = "rock",
  GHOST = "ghost",
  DRAGON = "dragon",
  DARK = "dark",
  STEEL = "steel",
  FAIRY = "fairy",
}

export enum MatchupKey {
  NO_EFFECT_ATTACKING = "noEffectAttacking",
  NO_EFFECT_DEFENDING = "noEffectDefending",
  NOT_VERY_EFFECTIVE_ATTACKING = "notVeryEffectiveAttacking",
  NOT_VERY_EFFECTIVE_DEFENDING = "notVeryEffectiveDefending",
  SUPER_EFFECTIVE_ATTACKING = "superEffectiveAttacking",
  SUPER_EFFECTIVE_DEFENDING = "superEffectiveDefending",
}
