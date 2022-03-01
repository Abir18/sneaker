import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const { email } = user;
  useEffect(() => {
    axios
      .get(`https://sneakers-website.herokuapp.com/orders?email=${email}`)
      .then(res => {
        // console.log(res);
        setOrders(res.data);
      });
  }, [email]);

  const handleDeleteOrder = id => {
    const sure = window.confirm('Are You Sure to Delete this Order?');
    if (sure) {
      axios
        .delete(`https://sneakers-website.herokuapp.com/orders/${id}`)
        .then(res => {
          // console.log(data);
          if (res.data.deletedCount === 1) {
            alert('Successfully Deleted Service');
            const remainingOrders = orders.filter(order => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      <h1>My Orders</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Product Price</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(row => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.productName}</TableCell>
                <TableCell align="right">{row.productPrice}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleDeleteOrder(row._id)}
                    variant="contained"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'red',
                      },
                    }}
                  >
                    Delete Order
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;
