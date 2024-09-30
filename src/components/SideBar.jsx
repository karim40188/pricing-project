import { Box, Typography } from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function SideBar() {
  let navigate = useNavigate();
  let [activeLink, setActiveLink] = useState(false);

  // تصفية العملاء بناءً على قيمة البحث

  let [links] = useState([
    { path: "/home", name: "Dashboard" },
    { path: "/Pricelist", name: "Price List" },
    { path: "/Comparison", name: "Comparison" },
    { path: "/transactions", name: "Transactions" },
    { path: "/profitanalysis", name: "Profit Analysis" },
    { path: "/reports", name: "Reports" },
    { path: "/settings", name: "Settings" },
  ]);

  return (
    <Box>
      {/* side bar */}
      <Box
        sx={{
          backgroundColor: "#8286db",
          width: "15%",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "0",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          pt: "30px",
          boxShadow: "0 8px 16px -2px rgba(40,45,62,.24)",
        }}
      >
        {links.map((link) => {
          return (
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
                navigate(`${link.path}`);
              }}
              key={link}
            >
              {link.name}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}

export default SideBar;
