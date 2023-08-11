import { Stack, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

function OtpInput({ numInputs, separator, setOtp }) {
  // const tempArray = [...Array(numInputs).keys()].map((i) => `id${i}`);
  const Inputs = {};
  const textRef = {};
  const tempArray = [...Array(numInputs).keys()].map((i) => {
    const id = `id${i}`;
    Inputs[id] = '';
    textRef[id] = useRef(null);
    return id;
  });
  console.log(tempArray);
  const [otpValues, setOtpValues] = useState({ ...Inputs });

  return (
    <Stack flexDirection="row" justifyContent="center" alignItems="center" rowGap={2}>
      {
      tempArray.map((key, index) => (
        <React.Fragment key={key}>
          <TextField
            id={key}
            name={key}
            type="number"
            inputRef={textRef[key]}
            InputProps={{ inputProps: { style: { textAlign: 'center' } } }}
            value={otpValues[key]}
            onBlur={() => {
              setOtp(Object.values(otpValues).join(''));
            }}
            onChange={(event) => {
              setOtpValues((prevstate) => ({
                ...prevstate,
                [key]: event.target.value,
              }));
              if (index + 1 !== tempArray.length && event.target.value) {
                textRef[`id${index + 1}`].current.focus();
              }
            }}
            sx={{
              width: '50px',
              'input::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
              },
            }}
          />
          { index + 1 === tempArray.length ? '' : separator}
        </React.Fragment>
      ))
        }
    </Stack>
  );
}

OtpInput.defaultProps = {
  numInputs: 4,
};

OtpInput.propTypes = {
  numInputs: PropTypes.number,
  separator: PropTypes.element.isRequired,
  setOtp: PropTypes.func.isRequired,
};

export default OtpInput;
