import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { useState } from 'react';

export default function Contact() {
    const [value, setValue] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleEmptyInput = (value) => {
        if (!value.trim()) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }

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
                {showAlert && (
                    <Alert variant="outlined" severity="info">
                        Input fields cannot be empty.
                    </Alert>
                )}
                <Typography variant='h5' sx={{ color: '#90caf9', marginTop: '20px' }} align='center'>
                    Want to connect?
                </Typography>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    maxRows={4}
                    required
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onMouseOut={() => handleEmptyInput(value)}
                />
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    multiline
                    required
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onMouseOut={() => handleEmptyInput(value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    required
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onMouseOut={() => handleEmptyInput(value)}
                />
                <Button sx={{ marginLeft: '135px' }} variant='outlined'>Submit</Button>
            </div>
        </Box>
    );
}