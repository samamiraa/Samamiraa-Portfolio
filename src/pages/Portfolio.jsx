import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import projects from '../utils/projects.json'
import { Link } from 'react-router-dom';

function Portfolio() {

    return (
        <div className="appJsx marginTop" >
            <Grid container justifyContent='center'>
                <Link to='https://github.com/samamiraa/Samamiraa-Portfolio'><Button gutterBottom variant='outlined'>View this portfolios github</Button></Link>
            </Grid>
            <div>
                <Container maxWidth='md' sx={{ padding: '20' }}>
                    <Grid container spacing={4}>
                        {projects.map((project) => (
                            <Grid item key={project.id} xs={12} sm={6} md={4}>
                                <Card className='card' sx={{ maxWidth: 300 }}>
                                    <CardMedia
                                        className='cardMedia'
                                        sx={{ height: 100 }}
                                        image={project.img}
                                        title={project.title}
                                    />
                                    <CardContent className='cardContent'>
                                        <Typography sx={{ color: '#90caf9' }} gutterBottom variant="h5" component="div">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" align='justify' color="text.secondary">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: 'center' }}>
                                        <Link to={project.github}><Button size="small">Github Repo</Button></Link>
                                        <Link to={project.url}><Button size="small">URL / Demo</Button></Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Portfolio;