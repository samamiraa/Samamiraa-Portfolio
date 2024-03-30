import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { skills } from '../utils/techSkills.json'

function Resume() {
    return (
        <div className='resumeBox appJsx'>
            <Box sx={{ width: '100%', maxWidth: 500 }} className='marginTop resumeBox'>
                <Typography variant="h5" sx={{ color: '#90caf9' }} gutterBottom>
                    Technical Skills
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                {skills.map((skill, index) => (
                                    <TableCell key={index}>{skill}</TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    variant="outlined"
                    startIcon={<FileDownloadIcon />}
                    href="/resume/resume.docx"
                    download="resume.docx"
                    sx={{ mt: 2 }}
                >
                    Download Resume
                </Button>
            </Box>
        </div>
    );
}


export default Resume;