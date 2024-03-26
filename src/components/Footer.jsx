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

function Footer() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return (
        <footer className='marginTopFooter'>
            <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.0)',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
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