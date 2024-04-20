import { Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { PokemonControlsProps } from "./types";
import { PokemonGameConfig, RulesetName } from "../../../../rulesets";

const PokemonControls = ({ config, setConfig }: PokemonControlsProps) => {
  const handleUpdate = (newConfig: PokemonGameConfig) => {
    setConfig(RulesetName.POKEMON, newConfig);
  };
  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Mutation Odds (1 in X)"
          type="number"
          onChange={(e) =>
            handleUpdate({
              ...config,
              randomMutationChance: parseInt(e.target.value),
            })
          }
          value={config.randomMutationChance}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={config.disableDragon}
              onChange={(e) => {
                handleUpdate({
                  ...config,
                  disableDragon: e.target.checked,
                });
              }}
              name={"disable-dragon-checkbox"}
              value={config.disableDragon}
            />
          }
          label={"Disable Dragon Type"}
        />
      </Grid>
    </>
  );
};

export default PokemonControls;
