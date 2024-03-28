import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Resume() {
    return (
        <div className='resumeBox'>
            <Box sx={{ width: '100%', maxWidth: 500 }} className='marginTop resumeBox'>
                <Typography variant="h5" sx={{ color: '#90caf9' }} gutterBottom>
                    Technical Skills
                </Typography>
                <Typography variant="body1" align='center' gutterBottom sx={{ color: 'textSecondary' }}>
                HTML | CSS | JAVASCRIPT | JQUERY | BOOTSTRAP | NODE.JS | OOP  EXPRESS.JS | SQL | ORM | MVC | NOSQL | PWA | REACT | MERN STATE | APIS
                </Typography>
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