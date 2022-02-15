import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  //   const [success, setSuccess] = useState(false);
  const { admin } = useAuth();
  console.log(admin);

  //   console.log(email, 'e');
  const handleOnBlur = e => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = e => {
    const user = { email };
    // console.log(user);
    e.preventDefault();

    axios
      .put(`https://polar-bastion-01816.herokuapp.com/users/admin`, user)
      .then(res => {
        console.log(res.data);
        const { data } = res;
        if (data.modifiedCount) {
          alert('Admin Created Successfully');
        }
        if (data.matchedCount === 1 && data.modifiedCount === 0) {
          alert('This User is already an Admin');
        }
        if (data.matchedCount === 0 && data.modifiedCount === 0) {
          alert('User Not Found');
        }
      });

    // fetch('https://polar-bastion-01816.herokuapp.com/users/admin', {
    //   method: 'PUT',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.modifiedCount) {
    //       setSuccess(true);
    //       console.log(data);
    //     }
    //     if (data.modifiedCount === 0) {
    //       setSuccess(false);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  return (
    <div>
      <h2>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          onBlur={handleOnBlur}
          type="email"
          label="Email"
          variant="standard"
          required
          sx={{ width: '30%' }}
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
        {/* {success && <Alert severity="success">Made Admin Successfully!</Alert>}
        {!success && <Alert severity="error">User Not Found</Alert>} */}
      </form>
    </div>
  );
};

export default MakeAdmin;
