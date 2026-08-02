import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography
} from "@mui/material";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    if (
      email === "ahmad@test.com" &&
      password === "Password@123"
    ) {

      localStorage.setItem("loggedIn","true");

      navigate("/dashboard");

      return;

    }

    alert("Invalid Email or Password");

  };

  return (

    <Box
      sx={{
        minHeight:"100vh",
        background:
        "linear-gradient(135deg,#0D47A1,#1565C0,#1E88E5,#42A5F5)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        p:2
      }}
    >

      <Container maxWidth="sm">

        <Paper
          elevation={20}
          sx={{
            p:6,
            borderRadius:5,
            backdropFilter:"blur(15px)"
          }}
        >

          <Box
            sx={{
              display:"flex",
              justifyContent:"center",
              mb:2
            }}
          >

            <AccountBalanceIcon
              sx={{
                fontSize:75,
                color:"#1565C0"
              }}
            />

          </Box>

          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
          >
            Secure Digital Banking
          </Typography>

          <Typography
            align="center"
            sx={{
              color:"#666",
              mb:4
            }}
          >
            Trusted Banking Experience
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt:4,
              py:1.7,
              borderRadius:3,
              fontWeight:"bold",
              fontSize:16
            }}
            onClick={login}
          >
            LOGIN
          </Button>

          <Typography
            align="center"
            sx={{
              mt:5,
              color:"#777",
              fontSize:13
            }}
          >
            Global Digital Banking
          </Typography>

          <Typography
            align="center"
            sx={{
              color:"#1565C0",
              fontWeight:"bold",
              mt:1
            }}
          >
            🇨🇦 Toronto &nbsp; • &nbsp; 🇮🇳 Hyderabad
          </Typography>

        </Paper>

      </Container>

    </Box>

  );

}
