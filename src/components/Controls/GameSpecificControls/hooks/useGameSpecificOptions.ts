import { useCallback, useContext, useMemo } from "react";
import { ControlsContext } from "../../context";
import { RulesetName } from "../../../../internal";

const useGameSpecificOptions = <T>(rulesetName: RulesetName) => {
  const { newGameSpecificConfigs, setNewGameSpecificConfigs } =
    useContext(ControlsContext);

  const config = newGameSpecificConfigs[rulesetName] as T;

  const handleUpdate = useCallback(
    (newConfig: T) => {
      setNewGameSpecificConfigs({
        ...newGameSpecificConfigs,
        [rulesetName]: newConfig,
      });
    },
    [newGameSpecificConfigs, setNewGameSpecificConfigs]
  );

  return useMemo(() => ({ config, handleUpdate }), [config, handleUpdate]);
};

export default useGameSpecificOptions;
