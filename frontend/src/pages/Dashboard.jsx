import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SavingsIcon from "@mui/icons-material/Savings";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <Box
      sx={{
        background: "#f4f7fb",
        minHeight: "100vh",
        pb: 5,
      }}
    >
      <AppBar
        position="static"
        sx={{
          background: "#0D47A1",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
            }}
          >
            🏦 Secure Digital Banking
          </Typography>

          <Button color="inherit" startIcon={<LogoutIcon />} onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography variant="h4" fontWeight="bold">
          Good Evening, Ahmad 👋
        </Typography>

        <Typography
          sx={{
            color: "#555",
            fontSize: 18,
            mt: 1,
          }}
        >
          Secure Digital Banking Portal
        </Typography>

        <Typography
          sx={{
            color: "#1565C0",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          🇨🇦 Toronto • 🇮🇳 Hyderabad
        </Typography>

        <Card
          elevation={12}
          sx={{
            borderRadius: 5,
            background: "linear-gradient(135deg,#0D47A1,#1976D2)",
            color: "white",
            mb: 5,
          }}
        >
          <CardContent>
            <Typography>Available Balance</Typography>

            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mt: 2,
              }}
            >
              CAD 18,050.40
            </Typography>

            <Typography
              sx={{
                mt: 2,
                opacity: 0.9,
              }}
            >
              Last Updated 02 Aug 2026
            </Typography>
          </CardContent>
        </Card>

        {/* Account Cards Grid */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card elevation={6} sx={{ borderRadius: 4 }}>
              <CardContent>
                <AccountBalanceWalletIcon
                  color="primary"
                  sx={{ fontSize: 45 }}
                />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Checking Account
                </Typography>

                <Typography variant="h5" fontWeight="bold">
                  CAD 5,250.40
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={6} sx={{ borderRadius: 4 }}>
              <CardContent>
                <SavingsIcon color="success" sx={{ fontSize: 45 }} />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Savings Account
                </Typography>

                <Typography variant="h5" fontWeight="bold">
                  CAD 12,800.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Transactions Card */}
        <Card
          elevation={6}
          sx={{
            mt: 4,
            borderRadius: 4,
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Recent Transactions
            </Typography>

            <Typography sx={{ py: 1 }}>
              💰 Payroll Deposit
              <Box
                component="span"
                sx={{ float: "right", color: "green", fontWeight: "bold" }}
              >
                + CAD 2,500.00
              </Box>
            </Typography>

            <Typography sx={{ py: 1 }}>
              🍽️ Pista House, Hyderabad
              <Box component="span" sx={{ float: "right" }}>
                - CAD 42.80
              </Box>
            </Typography>

            <Typography sx={{ py: 1 }}>
              ☕ Cafe Niloufer, Hyderabad
              <Box component="span" sx={{ float: "right" }}>
                - CAD 18.50
              </Box>
            </Typography>

            <Typography sx={{ py: 1 }}>
              🍛 Hotel Shadab, Hyderabad
              <Box component="span" sx={{ float: "right" }}>
                - CAD 36.25
              </Box>
            </Typography>

            <Typography sx={{ py: 1 }}>
              🍖 Shah Ghouse, Hyderabad
              <Box component="span" sx={{ float: "right" }}>
                - CAD 54.60
              </Box>
            </Typography>

            <Typography sx={{ py: 1 }}>
              ☕ Tim Hortons, Toronto
              <Box component="span" sx={{ float: "right" }}>
                - CAD 8.95
              </Box>
            </Typography>

            <Typography sx={{ py: 1 }}>
              🛒 Walmart, Toronto
              <Box component="span" sx={{ float: "right" }}>
                - CAD 126.35
              </Box>
            </Typography>
          </CardContent>
        </Card>

        {/* Footer */}
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
            color: "#666",
          }}
        >
          <Typography fontWeight="bold">Secure Digital Banking</Typography>

          <Typography variant="body2">Toronto 🇨🇦 • Hyderabad 🇮🇳</Typography>

          <Typography variant="caption">
            Industrial Azure DevOps Banking Project
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}