import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import Navbar from "./Navbar";

function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />

      <Box sx={{ml:'15%'}}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
