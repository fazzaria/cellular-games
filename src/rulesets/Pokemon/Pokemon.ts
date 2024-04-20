import { Ruleset, Grid } from "../../classes";
import { randomFromArray } from "../../utils";
import { typeColorMap, typeMatchup, matchupScoring } from "./const";
import {
  defaultPokemonConfig,
  MatchupKey,
  PokemonCell,
  PokemonGameConfig,
  PokemonType,
} from "./types";

const types = Object.keys(PokemonType).map(
  (key: string) => PokemonType[key as keyof typeof PokemonType]
);

class Pokemon implements Ruleset {
  constructor(config: Partial<PokemonGameConfig> = {}) {
    this.config = { ...defaultPokemonConfig, ...config };
    if (this.config.disableDragon) {
      this.filteredTypes = types.filter((type) => type !== PokemonType.DRAGON);
    }
  }
  config: PokemonGameConfig;
  filteredTypes: PokemonType[] = types;
  init(grid: Grid) {
    grid.iterateCells((cell) => {
      const type = randomFromArray(this.filteredTypes);
      cell.config.currentType = type;
      cell.currentColor = typeColorMap[type];
    });
  }
  update(grid: Grid) {
    grid.iterateCells((cell) => {
      const neighbors = grid.getNeighbors(cell);

      const neighborTypes = neighbors.map(
        (neighbor: PokemonCell) => neighbor.config.currentType
      );
      const { currentType } = cell.config;
      const matchupForCurrentType = typeMatchup[currentType];
      let nextType = cell.config.currentType;

      // add random mutations to prevent stable states
      if (Math.floor(Math.random() * this.config.randomMutationChance) === 1) {
        nextType = randomFromArray(this.filteredTypes);
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
      cell.setNextColor(typeColorMap[nextType as keyof typeof typeColorMap]);
    });
    grid.iterateCells((cell) => {
      cell.setCurrentColor(cell.nextColor);
      cell.config.currentType = cell.config.nextType;
    });
  }
}

export default Pokemon;
