import { Cell } from "../../classes";

export interface PokemonCellConfig {
  currentType: PokemonType;
  nextType: PokemonType;
}

export type PokemonCell = Omit<Cell, "config"> & {
  config: PokemonCellConfig;
};

export enum PokemonType {
  BUG = "Bug",
  DARK = "Dark",
  DRAGON = "Dragon",
  ELECTRIC = "Electric",
  FAIRY = "Fairy",
  FIGHTING = "Fighting",
  FIRE = "Fire",
  FLYING = "Flying",
  GHOST = "Ghost",
  GRASS = "Grass",
  GROUND = "Ground",
  ICE = "Ice",
  NORMAL = "Normal",
  POISON = "Poison",
  PSYCHIC = "Psychic",
  ROCK = "Rock",
  STEEL = "Steel",
  WATER = "Water",
}

export interface PokemonGameConfig {
  allowedTypes: PokemonType[];
  /* the odds that a cell will turn into a random pokemon type rather than follow normal rules.
  prevents stagnation or types going extinct */
  randomMutationChance: number;
  typeColors: { [key in PokemonType]: string };
}

export enum MatchupKey {
  NO_EFFECT_ATTACKING = "noEffectAttacking",
  NO_EFFECT_DEFENDING = "noEffectDefending",
  NOT_VERY_EFFECTIVE_ATTACKING = "notVeryEffectiveAttacking",
  NOT_VERY_EFFECTIVE_DEFENDING = "notVeryEffectiveDefending",
  SUPER_EFFECTIVE_ATTACKING = "superEffectiveAttacking",
  SUPER_EFFECTIVE_DEFENDING = "superEffectiveDefending",
}
