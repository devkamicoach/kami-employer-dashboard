import { Box, Button, Typography, TextField, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FunctionComponent } from 'react';

type CheckInModalTypes = {
  title: string;
  subtitle: string;
  input1: string;
  input2: string;
  input3: string;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 550,
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

const CheckInModal: FunctionComponent<CheckInModalTypes> = ({ title, subtitle, input1, input2, input3 }) => {
  return (
    <Box sx={style}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        sx={{
          color: '#403F3F',
          fontWeight: 'bold',
          fontFamily: 'SofiaPro',
        }}
      >
        {title}
      </Typography>
      <Typography
        id="modal-modal-description"
        component="p"
        sx={{
          color: '#666665',
          fontSize: 14,
        }}
      >
        {subtitle}
      </Typography>
      <Grid container>
        <Grid item sm={8}>
          <TextField
            sx={{
              width: '100%',
              mt: 2,
            }}
            className="bg-white"
            variant="outlined"
            InputProps={{
              readOnly: false,
            }}
            placeholder={input3}
          />
        </Grid>
        <Grid sm={4} item>
          <FormControl
            sx={{
              width: '95%',
              color: 'black!important',
              ml: 1,
              top: 16,
            }}
          >
            <InputLabel id="demo-simple-select-label">Choose Team</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value="">
              <MenuItem value={10}>Design</MenuItem>
              <MenuItem value={20}>Engineering</MenuItem>
              <MenuItem value={30}>Date Added</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TextField
        sx={{
          width: '100%',
          my: 2,
        }}
        className="bg-white"
        variant="outlined"
        InputProps={{
          readOnly: false,
        }}
        placeholder={input1}
      />
      <TextField
        sx={{
          width: '100%',
          mb: 2,
        }}
        className="bg-white"
        variant="outlined"
        multiline
        rows={6}
        InputProps={{
          readOnly: false,
        }}
        placeholder={input2}
      />
      <Button
        sx={{
          bgcolor: '#284F73!important',
          color: 'white',
          borderRadius: 1,
          width: '100%',
        }}
      >
        Send Check-in
      </Button>
    </Box>
  );
};

export default CheckInModal;
