import { Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";
import {
  RulesetName,
  WarGameConfig,
  getRandomColor,
} from "../../../../internal";
import { useState } from "react";
import { useGameSpecificOptions } from "../hooks";

const WarControls = () => {
  const { config, handleUpdate } = useGameSpecificOptions<WarGameConfig>(
    RulesetName.WAR
  );
  const [newArmyColor, setNewArmyColor] = useState<string>(getRandomColor());
  const { factionColors } = config;

  return (
    <>
      <Grid container item xs={12} spacing={2}>
        {factionColors.map((color, i) => {
          return (
            <Grid item key={`army-${color}`} alignItems="center">
              <Typography sx={{ color, display: "inline" }}>
                Army {i + 1}
              </Typography>
              <IconButton
                onClick={() => {
                  const newFactions = factionColors.filter(
                    (existingColor) => existingColor !== color
                  );
                  handleUpdate({ factionColors: newFactions });
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          );
        })}
      </Grid>
      <Grid container item xs={12} alignItems="center">
        <Grid item>
          <MuiColorInput
            format="hex"
            label={"New Army Color"}
            value={newArmyColor}
            onChange={(newColor) => setNewArmyColor(newColor)}
          />
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => {
              const newFactions = [...factionColors, newArmyColor];
              handleUpdate({ factionColors: newFactions });
              setNewArmyColor(getRandomColor());
            }}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default WarControls;
