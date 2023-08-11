import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import OtpInput from './OtpInput';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 300,
  bgcolor: 'background.paper',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: 2,
  boxShadow: 24,
  p: 4,
};

function TransitionsModal({
  email,
  open,
  setOpen,
  accessToken,
}) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const submit = async () => {
    const response = await axios.post('http://localhost:5000/otp/verify', {
      email,
      otp,
    }, {
      headers: {
        Autherization: `Bearer ${accessToken}`,
      },
    });
    const { isOtpValid } = response.data;
    if (isOtpValid) {
      setOpen(false);
      Cookies.set('Access_Token', accessToken, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      navigate('/news');
    }
  };

  return (
    <div>
      <Modal
        sx={{
          height: '500px',
        }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        disableEscapeKeyDown
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="inherit">
              Enter the OTP code that we sent to your mobile no +9190XXXXXX59
              be careful not to share with anyone
            </Typography>
            <OtpInput separator={<span>-</span>} numInputs={6} setOtp={setOtp} />
            <Button variant="contained" onClick={() => submit()}>
              Verify & Proceed
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  email: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
};

export default TransitionsModal;
