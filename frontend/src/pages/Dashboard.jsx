import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Box,
  Button
} from "@mui/material";

export default function Dashboard() {

  const transactions = [
    { name: "Pistah House", amount: "- CAD 45.00" },
    { name: "Cafe Niloufer", amount: "- CAD 18.50" },
    { name: "Walmart", amount: "- CAD 126.35" },
    { name: "Payroll Deposit", amount: "+ CAD 2,500.00" }
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
            Logout
          </Button>

        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>

        <Grid container spacing={3}>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Checking Account
                </Typography>

                <Typography variant="h4">
                  CAD 5,250.40
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Savings Account
                </Typography>

                <Typography variant="h4">
                  CAD 12,800.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card>
              <CardContent>

                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Recent Transactions
                </Typography>

                <List>

                  {transactions.map((item, index) => (

                    <ListItem key={index} divider>

                      <ListItemText
                        primary={item.name}
                        secondary={item.amount}
                      />

                    </ListItem>

                  ))}

                </List>

              </CardContent>
            </Card>
          </Grid>

        </Grid>

      </Container>

    </>
  );

}
