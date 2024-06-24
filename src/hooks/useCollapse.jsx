import { useContext } from "react";
import { CollapseContext } from "../Context/CollapseProvider";

const useCollapse = () => {
  const { isCollapsed, setIsCollapsed } = useContext(CollapseContext);
  return { isCollapsed, setIsCollapsed };
};

export default useCollapse;
