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
        <div>
            <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <Link to='https://www.linkedin.com/in/samantha-allen-51199b96/'><BottomNavigationAction icon={<LinkedInIcon />} /></Link>
                        <Link to='https://github.com/samamiraa'><BottomNavigationAction icon={<GitHubIcon />} /></Link>
                        <Link to='https://twitter.com/samiraa0813'><BottomNavigationAction icon={<XIcon />} /></Link>
                    </BottomNavigation>
                </Paper>
            </Box>
        </div>
    );
}

export default Footer;