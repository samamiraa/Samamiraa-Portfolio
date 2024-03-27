import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <Box
      className='marginTop'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='contactForm'>
        <Typography variant='h5' sx={{ color: '#90caf9' }} align='center'>
            Want to connect?
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Email"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
        />
      </div>
    </Box>
  );
}