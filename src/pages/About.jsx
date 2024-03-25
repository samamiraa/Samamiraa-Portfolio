import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import selfie from '../assets/selfie.jpg'

function About() {
    return (
        <div className='aboutJsx'>
            <CssBaseline />
            <Container
                className='aboutJsx'
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar
                    alt="Samantha Allen"
                    src={selfie}
                    sx={{ width: 150, height: 150 }}
                />
            </Container>
        </div>
    )
}

export default About;