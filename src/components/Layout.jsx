import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />

      <Box sx={{ml:'15%'}}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
