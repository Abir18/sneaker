import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import TransitionsModal from './TransitionsModal';
import ModalTest from './ModalTest';
// import useAuth from '../../../hooks/useAuth';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MakeAdmin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log(open, 'modal open');
  const [email, setEmail] = useState('');
  //   const [success, setSuccess] = useState(false);
  const { admin } = useAuth();
  // console.log(admin);

  //   console.log(email, 'e');
  const handleOnBlur = e => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = e => {
    const user = { email };
    // console.log(user);
    e.preventDefault();

    axios
      .put(`https://sneakers-website.herokuapp.com/users/admin`, user)
      .then(res => {
        console.log(res.data);
        const { data } = res;
        if (data.modifiedCount) {
          alert('Admin Created Successfully');
          e.target.reset();
        }
        if (data.matchedCount === 1 && data.modifiedCount === 0) {
          alert('This User is already an Admin');
        }
        if (data.matchedCount === 0 && data.modifiedCount === 0) {
          // alert('User Not Found');
          // <TransitionsModal open={open} setOpen={setOpen} />;
          // console.log('I am after modal');
          // <ModalTest />;
          <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </div>;
        }
      });

    // fetch('https://sneakers-website.herokuapp.com/users/admin', {
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
        <Button onClick={handleOpen} type="submit" variant="contained">
          Make Admin
        </Button>
        {/* {success && <Alert severity="success">Made Admin Successfully!</Alert>}
        {!success && <Alert severity="error">User Not Found</Alert>} */}
      </form>
    </div>
  );
};

export default MakeAdmin;
