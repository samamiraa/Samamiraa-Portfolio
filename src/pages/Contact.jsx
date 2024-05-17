import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlertName, setShowAlertName] = useState(false);
    const [showAlertEmail, setShowAlertEmail] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState(false);
    const [showAlertSubmit, setShowAlertSubmit] = useState(false);

    {/** trims whitespace, if no text prompts alert */ }
    const handleEmptyName = (value) => {
        if (!value.trim()) {
            setShowAlertName(true);
        } else {
            setShowAlertName(false);
        }
    }

    const handleEmptyEmail = (value) => {
        if (!value.trim()) {
            setShowAlertEmail(true);
        } else {
            setShowAlertEmail(false);
        }
    }

    const handleEmptyMessage = (value) => {
        if (!value.trim()) {
            setShowAlertMessage(true);
        } else {
            setShowAlertMessage(false);
        }
    }

    {/** regex for email validation */ }
    const emailValidation = (email) => {
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegEx.test(email);
    }

    {/** validates email, if not valid prompts invalid email */ }
    const handleEmailValidation = (event) => {
        const emailVal = event.target.value;
        setEmail(emailVal);
        setEmailError(!emailValidation(emailVal));
    }

    const handleSubmit = (e) => {
        const templateParams = {
            from_name: name,
            user_email: email,
            reply_to: email,
            message: message
        }
        // Send email using EmailJS
        e.preventDefault();
        emailjs.send('contact_service', 'contact_form', templateParams, 'DD8La53N89n4JZtlW')
            .then((response) => {
                console.log('Email sent successfully:', response);
            }, (error) => {
                console.error('Email sending failed:', error);
            }
            );

        setName('');
        setEmail('');
        setMessage('');

        setShowAlertSubmit(true);
    }

    return (
        <Box
            className='marginTop appJsx'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='contactForm appJsx'>
                {showAlertSubmit && (
                    <Alert variant="outlined" severity="success">
                        Contact Request Submitted!
                    </Alert>
                )}
                <ContactMailIcon sx={{ color: '#90caf9' }} />
                <Typography variant='body1' color='textSecondary' align='center'>
                    samanthaamiraallen@gmail.com
                </Typography>
                <ContactPhoneIcon sx={{ color: '#90caf9' }} />
                <Typography variant='body1' color='textSecondary' align='center' gutterBottom>
                    +1-604-349-8535
                </Typography>
                {/** alert that field is required if no text is entered */}
                {showAlertName && (
                    <Alert variant="outlined" severity="info">
                        Name is required
                    </Alert>
                )}
                {/** targets the change, if mouse leaves input with no text alert appears */}
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    maxRows={4}
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onMouseOut={() => handleEmptyName(name)}
                />
                {showAlertEmail && (
                    <Alert variant="outlined" severity="info">
                        Email is required
                    </Alert>
                )}
                {/** when text field changes, prompts email validation */}
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    multiline
                    required
                    value={email}
                    onChange={handleEmailValidation}
                    onMouseOut={() => handleEmptyEmail(email)}
                    error={!!emailError}
                    helperText={emailError ? 'Invalid Email' : ''}
                />
                {showAlertMessage && (
                    <Alert variant="outlined" severity="info">
                        Message is required
                    </Alert>
                )}
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onMouseOut={() => handleEmptyMessage(message)}
                />
                <Button sx={{ marginLeft: '135px', marginBottom: '20px' }} onClick={handleSubmit} variant='outlined'>Submit</Button>
            </div>
        </Box>
    );
}