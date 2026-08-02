import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from "@mui/material";

export default function Transactions() {

  const transactions = [
    {
      date: "2026-08-01",
      description: "Payroll Deposit",
      amount: "+ CAD 2,500.00"
    },
    {
      date: "2026-08-01",
      description: "Walmart",
      amount: "- CAD 126.35"
    },
    {
      date: "2026-07-31",
      description: "Cafe Niloufer",
      amount: "- CAD 18.50"
    },
    {
      date: "2026-07-30",
      description: "Pistah House",
      amount: "- CAD 45.00"
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
          Recent Transactions
        </Typography>

        <TableContainer component={Paper}>

          <Table>

            <TableHead>

              <TableRow>

                <TableCell>Date</TableCell>

                <TableCell>Description</TableCell>

                <TableCell align="right">Amount</TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {transactions.map((transaction, index) => (

                <TableRow key={index}>

                  <TableCell>
                    {transaction.date}
                  </TableCell>

                  <TableCell>
                    {transaction.description}
                  </TableCell>

                  <TableCell align="right">
                    {transaction.amount}
                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </TableContainer>

      </Container>

    </>
  );

}
