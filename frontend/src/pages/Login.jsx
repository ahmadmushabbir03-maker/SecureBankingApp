import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material";

export default function Login() {

  return (

    <Container maxWidth="sm">

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

        <Paper
          elevation={8}
          sx={{
            padding: 5,
            width: "100%",
            borderRadius: 4
          }}
        >

          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            Secure Digital Banking
          </Typography>

          <Typography
            align="center"
            sx={{ mb: 4 }}
          >
            Sign in to your account
          </Typography>

          <TextField
            fullWidth
            label="Email"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Login
          </Button>

        </Paper>

      </Box>

    </Container>

  );

}
