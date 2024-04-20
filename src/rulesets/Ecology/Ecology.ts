import { Ruleset, Grid } from "../../classes";
import {
  averageInitialSpawnNumberMap,
  creatureColorMap,
  creatureLifespanMap,
  neighborsRequiredMap,
} from "./const";
import {
  EcologyCell,
  CreatureType,
  EcologyGameConfig,
  defaultEcologyConfig,
} from "./types";

class Ecology implements Ruleset {
  constructor(config: Partial<EcologyGameConfig> = {}) {
    this.config = { ...defaultEcologyConfig, ...config };
  }
  config: EcologyGameConfig;
  init(grid: Grid) {
    let totalCells = 0;
    let totalToSpawn = 0;
    Object.keys(averageInitialSpawnNumberMap).forEach(
      (key) =>
        (totalToSpawn +=
          averageInitialSpawnNumberMap[
            key as keyof typeof averageInitialSpawnNumberMap
          ])
    );
    grid.iterateCells(() => totalCells++);
    grid.iterateCells((cell: EcologyCell) => {
      const shouldSpawnCreature =
        Math.floor((Math.random() * totalCells) / totalToSpawn) === 1;
      let type = CreatureType.NONE;
      if (shouldSpawnCreature) {
        // todo
        type = CreatureType.PRODUCER;
      }
      cell.setCurrentColor(creatureColorMap[type]);
      cell.setNextColor(creatureColorMap[type]);
      cell.config = {
        age: 1,
        nextType: type,
        type: type,
      };
    });
  }
  update(grid: Grid) {
    grid.iterateCells((cell: EcologyCell) => {
      const { age, type: currentType } = cell.config;
      if (currentType === CreatureType.NONE) return;
      const lifespan = creatureLifespanMap[currentType];
      console.log("age", age, "lifespan", lifespan);
      if (lifespan && lifespan < age) {
        console.log("hit");
        cell.config.nextType =
          currentType === CreatureType.DEAD
            ? CreatureType.NONE
            : CreatureType.DEAD;
        cell.config.age = 0;
      } else {
        const neighborsRequired = neighborsRequiredMap[currentType];
        if (neighborsRequired) {
          const neighbors = grid.getNeighbors(cell);
          const neighborTypes = neighbors.map(
            (neighbor: EcologyCell) => neighbor.config.type
          );
          // for a given creature cell, check that the requirements to stay alive are met
          let alive = true;
          Object.keys(neighborsRequired).forEach(
            (requiredType: CreatureType) => {
              const numberRequiredFn = neighborsRequired[requiredType];
              const numberExisting = neighborTypes.filter(
                (neighborType) => neighborType === requiredType
              ).length;
              if (!numberRequiredFn(numberExisting)) {
                alive = false;
              }
            }
          );
          if (!alive) {
            cell.config.nextType = CreatureType.DEAD;
            cell.config.age = 0;
          }
          // for the empty spaces of the creature cell, see if the conditions are right to spawn a creature
          const emptySpaces = neighbors.filter(
            (neighbor: EcologyCell) =>
              neighbor.config.type === CreatureType.NONE
          );
          emptySpaces.forEach((emptySpace: EcologyCell) => {
            Object.keys(neighborsRequiredMap).forEach(
              (typeToTest: CreatureType) => {
                let meetsRequirements = false;
                if (!meetsRequirements) {
                  Object.keys(neighborsRequiredMap[typeToTest]).forEach(
                    (requirementKey: CreatureType) => {
                      const numberRequiredFn =
                        neighborsRequiredMap[typeToTest][requirementKey];
                      const numberExisting = neighborTypes.filter(
                        (neighborType) => neighborType === typeToTest
                      ).length;
                      if (!numberRequiredFn(numberExisting)) {
                        meetsRequirements = true;
                        emptySpace.config.nextType = typeToTest;
                        emptySpace.config.age = 0;
                      }
                    }
                  );
                }
              }
            );
          });
        }
      }
      cell.config.age++;
      cell.setNextColor(creatureColorMap[cell.config.nextType]);
    });
    grid.iterateCells((cell: EcologyCell) => {
      cell.config.type = cell.config.nextType;
      cell.setCurrentColor(creatureColorMap[cell.config.type]);
    });
  }
}

export default Ecology;
