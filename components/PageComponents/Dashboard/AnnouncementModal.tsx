import { Box, Button, Typography, TextField } from '@mui/material';
import { FunctionComponent } from 'react';

type AnnouncementModalTypes = {
  title: string;
  subtitle: string;
  input1: string;
  input2: string;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 450,
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

const AnnouncementModal: FunctionComponent<AnnouncementModalTypes> = ({ title, subtitle, input1, input2 }) => {
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
        Send announcement
      </Button>
    </Box>
  );
};

export default AnnouncementModal;
