import { MatchupKey, PokemonType } from "./types";

export const matchupScoring = {
  [MatchupKey.NO_EFFECT_ATTACKING]: 0.1,
  [MatchupKey.NO_EFFECT_DEFENDING]: -0.1,
  [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: 1,
  [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: -1,
  [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: 4,
  [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: -4,
};

export const typeMatchup: {
  [key: string]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: PokemonType[];
    [MatchupKey.NO_EFFECT_DEFENDING]: PokemonType[];
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: PokemonType[];
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: PokemonType[];
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: PokemonType[];
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: PokemonType[];
  };
} = {
  [PokemonType.NORMAL]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.GHOST],
    [MatchupKey.NO_EFFECT_DEFENDING]: [PokemonType.GHOST],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.ROCK,
      PokemonType.STEEL,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [PokemonType.FIGHTING],
  },
  [PokemonType.FIRE]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.FIRE,
      PokemonType.WATER,
      PokemonType.ROCK,
      PokemonType.DRAGON,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.FIRE,
      PokemonType.GRASS,
      PokemonType.ICE,
      PokemonType.BUG,
      PokemonType.STEEL,
      PokemonType.FAIRY,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.GRASS,
      PokemonType.ICE,
      PokemonType.BUG,
      PokemonType.STEEL,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.WATER,
      PokemonType.GROUND,
      PokemonType.ROCK,
    ],
  },
  [PokemonType.WATER]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.WATER,
      PokemonType.GRASS,
      PokemonType.DRAGON,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.FIRE,
      PokemonType.WATER,
      PokemonType.ICE,
      PokemonType.STEEL,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.FIRE,
      PokemonType.GROUND,
      PokemonType.ROCK,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.ELECTRIC,
      PokemonType.GRASS,
    ],
  },
  [PokemonType.ELECTRIC]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.GROUND],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.ELECTRIC,
      PokemonType.GRASS,
      PokemonType.DRAGON,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.ELECTRIC,
      PokemonType.FLYING,
      PokemonType.STEEL,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.WATER,
      PokemonType.FLYING,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [PokemonType.GROUND],
  },
  [PokemonType.GRASS]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.GROUND],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.ELECTRIC,
      PokemonType.GRASS,
      PokemonType.DRAGON,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.ELECTRIC,
      PokemonType.FLYING,
      PokemonType.STEEL,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.WATER,
      PokemonType.FLYING,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [PokemonType.GROUND],
  },
  [PokemonType.ICE]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.FIRE,
      PokemonType.WATER,
      PokemonType.ICE,
      PokemonType.STEEL,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [PokemonType.ICE],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.GRASS,
      PokemonType.GROUND,
      PokemonType.FLYING,
      PokemonType.DRAGON,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.FIRE,
      PokemonType.FIGHTING,
      PokemonType.ROCK,
      PokemonType.STEEL,
    ],
  },
  [PokemonType.FIGHTING]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.GHOST],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.POISON,
      PokemonType.FLYING,
      PokemonType.PSYCHIC,
      PokemonType.BUG,
      PokemonType.FAIRY,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.BUG,
      PokemonType.ROCK,
      PokemonType.DARK,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.NORMAL,
      PokemonType.ICE,
      PokemonType.ROCK,
      PokemonType.DARK,
      PokemonType.STEEL,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.FLYING,
      PokemonType.PSYCHIC,
      PokemonType.FAIRY,
    ],
  },
  [PokemonType.POISON]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.STEEL],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.POISON,
      PokemonType.GROUND,
      PokemonType.ROCK,
      PokemonType.GHOST,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.GRASS,
      PokemonType.FIGHTING,
      PokemonType.POISON,
      PokemonType.BUG,
      PokemonType.FAIRY,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.GRASS,
      PokemonType.FAIRY,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.GROUND,
      PokemonType.PSYCHIC,
    ],
  },
  [PokemonType.GROUND]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.FLYING],
    [MatchupKey.NO_EFFECT_DEFENDING]: [PokemonType.ELECTRIC],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.GRASS,
      PokemonType.BUG,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.POISON,
      PokemonType.ROCK,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.FIRE,
      PokemonType.ELECTRIC,
      PokemonType.POISON,
      PokemonType.ROCK,
      PokemonType.STEEL,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.WATER,
      PokemonType.GRASS,
      PokemonType.ICE,
    ],
  },
  [PokemonType.FLYING]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [PokemonType.GROUND],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.ELECTRIC,
      PokemonType.ROCK,
      PokemonType.STEEL,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.GRASS,
      PokemonType.FIGHTING,
      PokemonType.BUG,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.GRASS,
      PokemonType.FIGHTING,
      PokemonType.BUG,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.ELECTRIC,
      PokemonType.ICE,
      PokemonType.ROCK,
    ],
  },
  [PokemonType.PSYCHIC]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.DARK],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.PSYCHIC,
      PokemonType.STEEL,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.FIGHTING,
      PokemonType.PSYCHIC,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.FIGHTING,
      PokemonType.POISON,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.BUG,
      PokemonType.GHOST,
      PokemonType.DARK,
    ],
  },
  [PokemonType.BUG]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.FIRE,
      PokemonType.FIGHTING,
      PokemonType.POISON,
      PokemonType.FLYING,
      PokemonType.GHOST,
      PokemonType.STEEL,
      PokemonType.FAIRY,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.GRASS,
      PokemonType.FIGHTING,
      PokemonType.GROUND,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.GRASS,
      PokemonType.PSYCHIC,
      PokemonType.DARK,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.FIRE,
      PokemonType.FLYING,
      PokemonType.ROCK,
    ],
  },
  [PokemonType.ROCK]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.FIGHTING,
      PokemonType.GROUND,
      PokemonType.STEEL,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.NORMAL,
      PokemonType.FIRE,
      PokemonType.POISON,
      PokemonType.FLYING,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.FIRE,
      PokemonType.ICE,
      PokemonType.FLYING,
      PokemonType.BUG,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.WATER,
      PokemonType.GRASS,
      PokemonType.FIGHTING,
      PokemonType.GROUND,
      PokemonType.STEEL,
    ],
  },
  [PokemonType.GHOST]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.NORMAL],
    [MatchupKey.NO_EFFECT_DEFENDING]: [
      PokemonType.NORMAL,
      PokemonType.FIGHTING,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [PokemonType.DARK],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.POISON,
      PokemonType.BUG,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.PSYCHIC,
      PokemonType.GHOST,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.GHOST,
      PokemonType.DARK,
    ],
  },
  [PokemonType.DRAGON]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [PokemonType.FAIRY],
    [MatchupKey.NO_EFFECT_DEFENDING]: [],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [PokemonType.STEEL],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.FIRE,
      PokemonType.WATER,
      PokemonType.ELECTRIC,
      PokemonType.GRASS,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [PokemonType.DRAGON],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.ICE,
      PokemonType.DRAGON,
      PokemonType.FAIRY,
    ],
  },
  [PokemonType.DARK]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [PokemonType.PSYCHIC],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.FIGHTING,
      PokemonType.DARK,
      PokemonType.FAIRY,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.GHOST,
      PokemonType.DARK,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.PSYCHIC,
      PokemonType.GHOST,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.FIGHTING,
      PokemonType.BUG,
      PokemonType.FAIRY,
    ],
  },
  [PokemonType.STEEL]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [PokemonType.POISON],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.FIRE,
      PokemonType.WATER,
      PokemonType.ELECTRIC,
      PokemonType.STEEL,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.NORMAL,
      PokemonType.GRASS,
      PokemonType.ICE,
      PokemonType.FLYING,
      PokemonType.PSYCHIC,
      PokemonType.BUG,
      PokemonType.ROCK,
      PokemonType.DRAGON,
      PokemonType.STEEL,
      PokemonType.FAIRY,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.ICE,
      PokemonType.ROCK,
      PokemonType.FAIRY,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.FIRE,
      PokemonType.FIGHTING,
      PokemonType.GROUND,
    ],
  },
  [PokemonType.FAIRY]: {
    [MatchupKey.NO_EFFECT_ATTACKING]: [],
    [MatchupKey.NO_EFFECT_DEFENDING]: [PokemonType.DRAGON],
    [MatchupKey.NOT_VERY_EFFECTIVE_ATTACKING]: [
      PokemonType.FIRE,
      PokemonType.POISON,
      PokemonType.STEEL,
    ],
    [MatchupKey.NOT_VERY_EFFECTIVE_DEFENDING]: [
      PokemonType.FIGHTING,
      PokemonType.BUG,
      PokemonType.DARK,
    ],
    [MatchupKey.SUPER_EFFECTIVE_ATTACKING]: [
      PokemonType.FIGHTING,
      PokemonType.DRAGON,
      PokemonType.DARK,
    ],
    [MatchupKey.SUPER_EFFECTIVE_DEFENDING]: [
      PokemonType.POISON,
      PokemonType.STEEL,
    ],
  },
};
