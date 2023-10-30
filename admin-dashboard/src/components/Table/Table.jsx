import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 137562,
      product: "Samsung S23 Ultra",
      customer: "Ejike Odumegwu",
      date: "1 March",
      amount: 850,
      method: "Paypal",
      status: "Approved",
    },
    {
      id: 112352,
      product: "Dell Inspiron 17",
      customer: "Williams Okpoyo",
      date: "7 March",
      amount: 750,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 223785,
      product: "Iphone 14 Promax",
      customer: "Sofia Amina",
      date: "15 Febuary",
      amount: 900,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 196657,
      product: "Playstation 5",
      customer: "Obinna Emmanuel",
      date: "23 March",
      amount: 1000,
      method: "Paypal",
      status: "Approved",
    },
    {
      id: 213456,
      product: "Samsung A72",
      customer: "Olatunde Michael",
      date: "18 April",
      amount: 650,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 137562,
      product: "Infinix Hot 12",
      customer: "Gbenga Abdulkareem",
      date: "30 May",
      amount: 500,
      method: "Cash on delivery",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Transaction ID</TableCell>
            <TableCell className="tablecell">Product</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tablecell">{row.product}</TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
