import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  MenuItem,
} from "@mui/material";
import { PokemonControlsProps } from "./types";
import {
  PokemonGameConfig,
  PokemonType,
  RulesetName,
} from "../../../../rulesets";
import { MuiColorInput } from "mui-color-input";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

const PokemonControls = ({ config, setConfig }: PokemonControlsProps) => {
  const [typeToChangeColor, setTypeToChangeColor] = useState<PokemonType>(
    PokemonType.BUG
  );
  const handleUpdate = (newConfig: PokemonGameConfig) => {
    setConfig(RulesetName.POKEMON, newConfig);
  };
  const { allowedTypes, typeColors } = config;
  const allTypesAllowed =
    allowedTypes.length === Object.keys(PokemonType).length;
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
      <Grid container item xs={12}>
        <FormControl>
          <FormLabel>Enable / Disable Pokemon Types</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allTypesAllowed}
                  onChange={() => {
                    let newTypes = Object.keys(PokemonType).map(
                      (key) => PokemonType[key]
                    );
                    handleUpdate({
                      ...config,
                      allowedTypes: allTypesAllowed ? [] : newTypes,
                    });
                  }}
                  name={`enable-type-select-all-checkbox`}
                  value={!allTypesAllowed}
                />
              }
              label={`${allTypesAllowed ? "Deselect" : "Select"} All`}
            />
            {Object.keys(PokemonType).map((key) => {
              const type = PokemonType[key];
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={allowedTypes.includes(type)}
                      onChange={(e) => {
                        let newTypes = [...allowedTypes];
                        if (e.target.checked) {
                          newTypes.push(type);
                        } else {
                          newTypes = newTypes.filter(
                            (newType) => newType !== type
                          );
                        }
                        handleUpdate({
                          ...config,
                          allowedTypes: newTypes,
                        });
                      }}
                      name={`enable-type-${type}-checkbox`}
                      value={allowedTypes.includes(type)}
                    />
                  }
                  key={`pokemon-type-form-${key}`}
                  label={type.toString()}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          label="Change Color of Type"
          onChange={(e) => {
            setTypeToChangeColor(e.target.value as PokemonType);
          }}
          select
          value={typeToChangeColor}
        >
          {Object.keys(PokemonType).map((key) => (
            <MenuItem key={key} value={PokemonType[key]}>
              {PokemonType[key]}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item md={6} xs={12}>
        <MuiColorInput
          format="hex"
          label={`${typeToChangeColor} Color`}
          value={typeColors[typeToChangeColor]}
          onChange={(newColor) =>
            handleUpdate({
              ...config,
              typeColors: { ...typeColors, [typeToChangeColor]: newColor },
            })
          }
        />
      </Grid>
    </>
  );
};

export default PokemonControls;
