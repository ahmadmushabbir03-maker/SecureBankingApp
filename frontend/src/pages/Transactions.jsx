import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Box
} from "@mui/material";

const transactions = [

  {
    date:"2026-08-02",
    merchant:"Payroll Deposit",
    amount:"+ CAD 2,500.00",
    status:"Credit"
  },

  {
    date:"2026-08-02",
    merchant:"Pista House",
    amount:"- CAD 42.80",
    status:"Debit"
  },

  {
    date:"2026-08-01",
    merchant:"Cafe Niloufer",
    amount:"- CAD 18.50",
    status:"Debit"
  },

  {
    date:"2026-08-01",
    merchant:"Hotel Shadab",
    amount:"- CAD 36.25",
    status:"Debit"
  },

  {
    date:"2026-07-31",
    merchant:"Shah Ghouse",
    amount:"- CAD 54.60",
    status:"Debit"
  },

  {
    date:"2026-07-31",
    merchant:"Tim Hortons",
    amount:"- CAD 8.95",
    status:"Debit"
  },

  {
    date:"2026-07-30",
    merchant:"Hydro One",
    amount:"- CAD 112.20",
    status:"Debit"
  },

  {
    date:"2026-07-30",
    merchant:"Petro Canada",
    amount:"- CAD 64.90",
    status:"Debit"
  },

  {
    date:"2026-07-29",
    merchant:"Rogers",
    amount:"- CAD 79.99",
    status:"Debit"
  },

  {
    date:"2026-07-29",
    merchant:"Walmart",
    amount:"- CAD 126.35",
    status:"Debit"
  }

];

export default function Transactions(){

return(

<Box sx={{background:"#f5f7fb",minHeight:"100vh"}}>

<AppBar position="static">

<Toolbar>

<Typography variant="h6">

Recent Transactions

</Typography>

</Toolbar>

</AppBar>

<Container sx={{mt:5}}>

<Paper elevation={8} sx={{borderRadius:4}}>

<Table>

<TableHead>

<TableRow>

<TableCell>Date</TableCell>

<TableCell>Merchant</TableCell>

<TableCell>Status</TableCell>

<TableCell align="right">Amount</TableCell>

</TableRow>

</TableHead>

<TableBody>

{transactions.map((t,index)=>(

<TableRow key={index}>

<TableCell>{t.date}</TableCell>

<TableCell>{t.merchant}</TableCell>

<TableCell>

<Chip

label={t.status}

color={t.status==="Credit"?"success":"error"}

/>

</TableCell>

<TableCell align="right">

{t.amount}

</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</Paper>

</Container>

</Box>

);

}
