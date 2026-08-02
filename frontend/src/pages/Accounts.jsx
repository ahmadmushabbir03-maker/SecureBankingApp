import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip
} from "@mui/material";

export default function Accounts() {

  const accounts = [
    {
      type: "Checking Account",
      number: "**** 4567",
      balance: "CAD 5,250.40",
      status: "Active"
    },
    {
      type: "Savings Account",
      number: "**** 7890",
      balance: "CAD 12,800.00",
      status: "Active"
    }
  ];

  return (
    <>

      <AppBar position="static">
        <Toolbar>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Secure Digital Banking
          </Typography>

          <Button color="inherit">
            Dashboard
          </Button>

        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>

        <Typography
          variant="h4"
          gutterBottom
        >
          My Accounts
        </Typography>

        <Grid container spacing={3}>

          {accounts.map((account, index) => (

            <Grid size={{ xs: 12, md: 6 }} key={index}>

              <Card elevation={5}>

                <CardContent>

                  <Typography variant="h6">
                    {account.type}
                  </Typography>

                  <Typography sx={{ mt: 2 }}>
                    Account Number
                  </Typography>

                  <Typography fontWeight="bold">
                    {account.number}
                  </Typography>

                  <Typography sx={{ mt: 2 }}>
                    Available Balance
                  </Typography>

                  <Typography
                    variant="h4"
                    color="primary"
                  >
                    {account.balance}
                  </Typography>

                  <Chip
                    sx={{ mt: 2 }}
                    color="success"
                    label={account.status}
                  />

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

    </>
  );

}
