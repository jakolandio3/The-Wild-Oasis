import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const DemoModeContext = createContext();

function DemoModeProvider({ children }) {
  const [isDemoMode, setIsDemoMode] = useState(true);
  function toggleDemoMode() {
    setIsDemoMode((isDemoMode) => !isDemoMode);
    if (isDemoMode) {
      toast.success("Exiting Demo Mode");
    } else toast.success("Changed To Demo Mode");
  }
  return (
    <DemoModeContext.Provider value={{ isDemoMode, toggleDemoMode }}>
      {children}
    </DemoModeContext.Provider>
  );
}

function useDemoMode() {
  const context = useContext(DemoModeContext);
  if (context === undefined)
    throw new Error("DemoModeContext was used outside of provider");
  return context;
}

export { useDemoMode, DemoModeProvider };
