import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { FaUser, FaLock } from "react-icons/fa"; // استيراد الأيقونات
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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
            background: "rgba(255, 255, 255, 0.1)", // خلفية شفافة
            borderRadius: "15px", // زوايا مستديرة
            padding: "20px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // ظل خفيف
            backdropFilter: "blur(20px)", // تأثير ضبابي
            WebkitBackdropFilter: "blur(10px)", // دعم متصفح سفاري
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
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
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
                navigate("/"); // الانتقال إلى الصفحة الرئيسية بعد تسجيل الدخول
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
                  backgroundColor: "#9a7b9e", // لون مختلف عند التحريك
                },
                transition: "background-color 0.3s ease", // تأثير انتقال لونه
              }}
            >
              Login
            </Button>
            <Typography variant="body2" color="#fff" align="center">
              Don't have an account?{" "}
              <Button onClick={() => navigate("/register")} color="inherit">
                Register
              </Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
