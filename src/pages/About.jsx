import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import selfie from '/img/selfie.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <div className='aboutJsx'>
            <CssBaseline />
            <Container
                className='aboutJsx'
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginTop: '25px'
                }}
            >
                <Avatar
                    alt="Samantha Allen"
                    src={selfie}
                    sx={{ width: 150, height: 150 }}
                />

                <Box sx={{ width: '100%', maxWidth: 500, marginLeft: '35px', marginTop: '25px', color: 'text.secondary' }}>
                    <Typography variant="h5" gutterBottom>
                      Full Stack Web Developer
                    </Typography>
                    <Typography variant="body1" align='justify' gutterBottom>
                    An emerging full-stack web developer passionate about crafting engaging 
                    digital experiences. With a foundation in HTML, CSS, and JavaScript, 
                    I am eager to delve deeper into front-end frameworks like React and 
                    back-end technologies such as Node.js. Driven by curiosity and a commitment 
                    to continuous learning, I am poised to make meaningful 
                    contributions to the world of web development.
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default About;