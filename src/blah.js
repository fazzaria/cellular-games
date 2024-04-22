const madge = require("madge");

madge("src/utils/canvasUtils/getCanvasElement.ts")
  .then((res) => res.image("./image.svg", true))
  .then((writtenImagePath) => {
    console.log("Image written to " + writtenImagePath);
  });
