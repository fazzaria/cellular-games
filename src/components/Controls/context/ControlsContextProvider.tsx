import useControlsContext from "./useControlsContext";
import ControlsContext from "./ControlsContext";

const ControlsContextProvider = ({ children }) => {
  const contextValue = useControlsContext();
  return (
    <ControlsContext.Provider value={contextValue}>
      {children}
    </ControlsContext.Provider>
  );
};

export default ControlsContextProvider;
