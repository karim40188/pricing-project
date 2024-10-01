import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export let sideBarOpen = createContext("");
// eslint-disable-next-line react/prop-types
export function SideBarOpenProvider({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <sideBarOpen.Provider value={{ drawerOpen, setDrawerOpen }}>
      {children}
    </sideBarOpen.Provider>
  );
}
