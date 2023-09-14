import "./table.scss"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const List = () => {

const rows =[
{
    id:"`12334",
    product:"dhsfkah",
    img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    customer:"Amrendra",
    date:"27 feb",
    amount:8765,
    method:"Case on delaivery",
    status:"Approved",

},
{
    id:"`5634",
    product:"bvjdcsjkdckax",
    img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    customer:"Amrendra",
    date:"27 feb",
    amount:8765,
    method:"Case on delaivery",
    status:"Approved",

},
{
    id:"`12334",
    product:"dhsfkah",
    img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    customer:"Amrendra",
    date:"27 feb",
    amount:8765,
    method:"Case on delaivery",
    status:"Pending",

},
{
    id:"`12334",
    product:"dhsfkah",
    img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    customer:"Amrendra",
    date:"27 feb",
    amount:8765,
    method:"Case on delaivery",
    status:"Approved",

},
{
    id:"`12334",
    product:"dhsfkah",
    img:"https://images.pexels.com/photos/15745725/pexels-photo-15745725/free-photo-of-photo-of-a-man-wearing-traditional-clothing-paddling-in-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    customer:"Amrendra",
    date:"27 feb",
    amount:8765,
    method:"Case on delaivery",
    status:"Pending",

},

];
    
    
  return<TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className="tableCell">Tracking ID</TableCell>
        <TableCell className="tableCell" >Product</TableCell>
        <TableCell className="tableCell" >Customer</TableCell>
        <TableCell className="tableCell" >Date</TableCell>
        <TableCell className="tableCell" >Amount</TableCell>
        <TableCell className="tableCell" >Payment Method</TableCell>
        <TableCell className="tableCell" >Status</TableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          
        >
          <TableCell component="th" scope="row" className="tableCell">
            {row.id}
          </TableCell>
          <TableCell className="tableCell" align="right">
            <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
            </div>
          </TableCell>
          <TableCell className="tableCell" align="right">{row.customer}</TableCell>
          <TableCell className="tableCell" align="right">{row.date}</TableCell>
          <TableCell className="tableCell" align="right">{row.amount}</TableCell>
          <TableCell className="tableCell" align="right">{row.method}</TableCell>
          <TableCell className="tableCell" align="right">
            <span className={`status ${row.status}`}>{row.status}</span>
          </TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
}

export default List
