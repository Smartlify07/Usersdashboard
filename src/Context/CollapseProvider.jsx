/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CollapseContext = createContext();

export const CollapseProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <CollapseContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </CollapseContext.Provider>
  );
};
