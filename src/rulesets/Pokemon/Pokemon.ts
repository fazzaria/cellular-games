import {
  defaultGameOptions,
  GlobalConfig,
  Grid,
  randomFromArray,
  Ruleset,
  RulesetName,
} from "../../internal";
import { typeMatchup, matchupScoring } from "./const";
import {
  MatchupKey,
  PokemonCell,
  PokemonGameConfig,
  PokemonType,
} from "./types";

class Pokemon implements Ruleset {
  constructor(config: Partial<PokemonGameConfig> = {}) {
    this.config = {
      ...defaultGameOptions[RulesetName.POKEMON],
      ...config,
    } as PokemonGameConfig;
  }
  config: PokemonGameConfig;
  defaultGlobalSettings: GlobalConfig;
  init(grid: Grid) {
    grid.iterateCells((cell) => {
      const { allowedTypes, typeColors } = this.config;
      const type = randomFromArray(allowedTypes) || PokemonType.ELECTRIC;
      cell.config = { currentType: type };
      cell.currentColor = typeColors[type];
    });
  }
  update(grid: Grid) {
    grid.iterateCells((cell) => {
      const { allowedTypes, randomMutationChance, typeColors } = this.config;
      const neighbors = grid.getNeighbors(cell);

      const neighborTypes = neighbors.map(
        (neighbor: PokemonCell) => neighbor.config.currentType
      );
      const { currentType } = cell.config;
      const matchupForCurrentType = typeMatchup[currentType];
      let nextType = cell.config.currentType;

      // add random mutations to prevent stable states
      if (Math.floor(Math.random() * randomMutationChance) === 1) {
        nextType = randomFromArray(allowedTypes) || PokemonType.ELECTRIC;
      } else {
        let averageDamageDealt = 0;
        let averageDamageReceived = 0;
        const damageByType: { [key: string]: number } = {};
        neighborTypes.forEach((neighborType) => {
          if (!damageByType.neighborType) damageByType[neighborType] = 0;
          Object.keys(matchupForCurrentType).forEach((key: MatchupKey) => {
            if (matchupForCurrentType[key].includes(neighborType)) {
              const damageScore = matchupScoring[key];
              damageByType[neighborType] += damageScore;
              if (damageScore > 0) {
                averageDamageDealt += damageScore;
              } else {
                averageDamageReceived += damageScore;
              }
            }
          });
          averageDamageDealt /= neighbors.length;
          averageDamageReceived /= neighbors.length;
        });
        if (averageDamageDealt > averageDamageReceived) {
          let highestHit = 0;
          Object.keys(damageByType).forEach((key: PokemonType) => {
            if (damageByType[key] > highestHit && key !== currentType) {
              highestHit = damageByType[key];
              nextType = key;
            }
          });
        }
      }
      cell.config.nextType = nextType;
      cell.setNextColor(typeColors[nextType]);
    });
    grid.iterateCells((cell) => {
      cell.setCurrentColor(cell.nextColor);
      cell.config.currentType = cell.config.nextType;
    });
  }
}

export default Pokemon;
