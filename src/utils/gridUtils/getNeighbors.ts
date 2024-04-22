import { Cell, Grid } from "../../classes";

function getNeighbors(this: Grid, cell: Cell, radius: number = 1) {
  const {
    config: { cellShape, loops },
    rows,
  } = this;

  const { x: cellX, y: cellY } = cell;

  if (!rows[0]?.length) return [];

  const leftEdge = 0;
  const rightEdge = rows.length - 1;
  const topEdge = 0;
  const bottomEdge = rows[0].length - 1;
  const neighbors: Cell[] = [];

  const neighborFromCoords = (deltaX: number, deltaY: number) => {
    let neighborX = cellX + deltaX;
    let neighborY = cellY + deltaY;
    if (loops) {
      if (neighborX < leftEdge) {
        neighborX = rightEdge;
      } else if (neighborX > rightEdge) {
        neighborX = leftEdge;
      }
      if (neighborY < topEdge) {
        neighborY = bottomEdge;
      } else if (neighborY > bottomEdge) {
        neighborY = topEdge;
      }
    }
    return rows[neighborX]?.[neighborY];
  };

  switch (cellShape) {
    case "hex":
      const yEven = cellY % 2 === 0;
      const oddNeighborCoords = [
        [0, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ];
      const evenNeighborCoords = [
        [-1, -1],
        [0, -1],
        [-1, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
      ];
      (yEven ? evenNeighborCoords : oddNeighborCoords).forEach((coord) => {
        const [deltaX, deltaY] = coord;
        const neighbor = neighborFromCoords(deltaX, deltaY);
        if (neighbor) {
          neighbors.push(neighbor);
        }
      });
      break;
    case "square":
      const coords = [-1, 0, 1];
      coords.forEach((deltaX) => {
        coords.forEach((deltaY) => {
          if (deltaX === 0 && deltaY === 0) return;
          const neighbor = neighborFromCoords(deltaX, deltaY);
          if (neighbor) {
            neighbors.push(neighbor);
          }
        });
      });
      break;
  }
  return neighbors;
}

export default getNeighbors;
