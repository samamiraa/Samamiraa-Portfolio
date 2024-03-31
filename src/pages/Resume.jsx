import * as React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));


function Resume() {
    return (
        <div className='resumeBox appJsx'>
            <Box sx={{ width: '100%', maxWidth: 500 }} className='marginTop resumeBox'>
                <Typography variant="h5" sx={{ color: '#90caf9' }} gutterBottom>
                    Technical Skills
                </Typography>
                <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                    <FormGroup row>
                    </FormGroup>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                Icon with text
                            </Typography>
                            <Demo>
                                <List dense='true'>
                                    {generate(
                                        <ListItem>
                                            <ListItemIcon>

                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Single-line item"

                                            />
                                        </ListItem>,
                                    )}
                                </List>
                            </Demo>
                        </Grid>
                    </Grid>
                </Box>
                <Button
                    variant="outlined"
                    startIcon={<FileDownloadIcon />}
                    href="/resume/resume.docx"
                    download="resume.docx"
                    sx={{ mt: 2, mb: 4}}
                >
                    Download Resume
                </Button>
            </Box>
        </div>
    );
}


export default Resume;