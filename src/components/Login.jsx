import { Box, Typography, TextField, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import registerBg from "../assets/register_bg.png";
const LoginPage = () => {
  let navigate = useNavigate();

  return (
    <Box sx={{display:'flex',justfiyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
      <Box
        src={registerBg}
        sx={{
          background: `url(${registerBg})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width:'100%',
        }}
      >
        <Box sx={{ width: "500px", mx: "auto" }}>
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
              backdropFilter: "blur(3px)", // تأثير ضبابي
              WebkitBackdropFilter: "blur(3px)", // دعم متصفح سفاري
              mt:'-25px'
            }}
          >
            <Box sx={{ width: "100px", mb: 2 }}>
              <Box sx={{ width: "100%" }} component="img" src={logo} />
            </Box>

            <Typography component="h1" variant="h5" fontWeight="bold">
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <Button
                onClick={() => {
                  navigate("/home"); // الانتقال إلى الصفحة الرئيسية بعد تسجيل الدخول
                }}
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: "30px",
                  height: "40px",
                  backgroundColor: "#114639",
                  color: "#fff",
                  width:'50%',
                  display:'block',
                  ml:'auto',


                  "&:hover": {
                    backgroundColor: "#114639", // لون مختلف عند التحريك
                  },
                  transition: "background-color 0.3s ease", // تأثير انتقال لونه
                }}
              >
                Login
              </Button>
              <Typography variant="body2" color="#fff" align="center">
                Don&apos;t have an account?{" "}
                <Button onClick={() => navigate("/register")} color="inherit">
                  Register
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
