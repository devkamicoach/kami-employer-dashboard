import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { FunctionComponent } from 'react';

import PersonIcon from '@mui/icons-material/Person';

type DetailsType = {
  details: Array<any>;
};

const Details: FunctionComponent<DetailsType> = ({ details }) => {
  return (
    <>
      <Grid item className="flex flex-col">
        <Typography component="h2" className="font-heading text-2xl font-bold py-3">
          Profile Details
        </Typography>
        {details.map(({ label, input }, index) => (
          <Box
            key={index}
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <Typography component="h3" className="font-body font-bold">
                {label}
              </Typography>
              <TextField
                className=" bg-white"
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
                defaultValue={input}
              />
            </Box>
          </Box>
        ))}
      </Grid>
      <Grid item className="flex flex-col items-center m-auto">
        <PersonIcon
          style={{
            color: '#666665',
            backgroundColor: '#F2EFEB',
            borderRadius: 100,
            padding: 5,
            fontSize: '12rem',
          }}
        />
        <Box className="flex flex-row py-5 gap-4">
          <Button variant="contained" className="bg-[#F2EFEB] text-[#7A7A7A]">
            Upload
          </Button>
          <Button variant="contained" className="bg-[#F2EFEB] text-[#7A7A7A]">
            Remove
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Details;
