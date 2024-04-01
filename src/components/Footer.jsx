{/* imports dependancies from material ui and react router dom */}
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

{/* footer that displays on every page */}
function Footer() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return (
        <footer className='marginTopFooter'>
            <Box ref={ref}>
                <CssBaseline />
                <Paper>
                    <BottomNavigation
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.0)',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        {/* icons links for github, twitter and linkedin */}
                        <Link to='https://www.linkedin.com/in/samantha-allen-51199b96/'><BottomNavigationAction icon={<LinkedInIcon sx={{ color: '#90caf9' }} />} /></Link>
                        <Link to='https://github.com/samamiraa'><BottomNavigationAction icon={<GitHubIcon sx={{ color: '#90caf9' }} />} /></Link>
                        <Link to='https://twitter.com/samiraa0813'><BottomNavigationAction icon={<XIcon sx={{ color: '#90caf9' }} />} /></Link>
                    </BottomNavigation>
                </Paper>
            </Box>
        </footer>
    );
}

export default Footer;