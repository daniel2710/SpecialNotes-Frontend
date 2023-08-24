"use client"
import { createContext, useState } from "react";

type SidebarContextType = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};
  
export const SidebarContext = createContext<SidebarContextType>({
  active: false,
  setActive: () => {},
});
  
type SidebarContextProviderProps = {
  children: React.ReactNode;
};
  
export const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [ active, setActive ] = useState(false);
  
  const handleChangeState: SidebarContextType["setActive"] = (newState) => {
    setActive(newState);
  };
  
  return (
    <SidebarContext.Provider value={{ active, setActive: handleChangeState }}>
      {children}
    </SidebarContext.Provider>
  );
};