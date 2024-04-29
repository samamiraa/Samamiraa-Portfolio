{/* material ui imports */}
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
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginTop: '100px'
                }}
            >
                {/* image of myself */}
                <Avatar
                    alt="Samantha Allen"
                    src={selfie}
                    sx={{ width: 150, height: 150 }}
                />

                {/* bio */}
                <Box sx={{ width: '100%', maxWidth: 500, marginLeft: '35px', marginTop: '25px', color: 'text.secondary' }}>
                    <Typography variant="h5" gutterBottom>
                      Full Stack Web Developer
                    </Typography>
                    <Typography variant="body1" align='justify' gutterBottom>
                    A full-stack web developer passionate about creating engaging digital experiences. With a foundation in HTML, CSS, and JavaScript, I am eager to dive deeper into front-end frameworks like React and back-end technologies such as Node.js. I am commited to continuous learning and I am excited to add new programming languages to my skillset. 
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default About;