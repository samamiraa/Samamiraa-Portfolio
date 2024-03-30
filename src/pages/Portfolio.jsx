import Button from '@mui/material/Button';
import { Container, Grid } from '@mui/material';
import projects from '../utils/projects.json'
import { Link } from 'react-router-dom';
import Project from '../components/Project'

function Portfolio() {
    return (
        <div className="appJsx marginTop" >
            <Grid container justifyContent='center'>
                <Link to='https://github.com/samamiraa/Samamiraa-Portfolio'><Button variant='outlined'>View this portfolios github</Button></Link>
            </Grid>
            <div>
                <Container maxWidth='md' sx={{ padding: '20' }}>
                    <Grid container spacing={4}>
                        {projects.map((project) => (
                            <Project key={project.id} {...project}/>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Portfolio;