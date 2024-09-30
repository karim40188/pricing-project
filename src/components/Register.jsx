import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // استيراد الأيقونات
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #FF6F61 0%, #F7B733 100%)",
        height: "100vh",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: "30px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Box sx={{ width: "100px", mb: 2 }}>
            <Box sx={{ width: "100%" }} component="img" src={logo} />
          </Box>

          <Typography
            component="h1"
            variant="h5"
            color="#fff"
            fontWeight="bold"
          >
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                startAdornment: (
                  <FaUser style={{ color: "#fff", marginRight: "8px" }} />
                ),
                style: {
                  color: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "5px",
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                startAdornment: (
                  <FaEnvelope style={{ color: "#fff", marginRight: "8px" }} />
                ),
                style: {
                  color: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "5px",
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                startAdornment: (
                  <FaLock style={{ color: "#fff", marginRight: "8px" }} />
                ),
                style: {
                  color: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "5px",
                },
              }}
            />
            <Button
              onClick={() => {
                navigate("/");
              }}
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "30px",
                height: "40px",
                backgroundColor: "#fff",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#9a7b9e",
                },
                transition: "background-color 0.3s ease",
              }}
            >
              Register
            </Button>
            <Typography variant="body2" color="#fff" align="center">
              Already have an account?{" "}
              <Button onClick={() => navigate("/login")} color="inherit">
                Login
              </Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterPage;
