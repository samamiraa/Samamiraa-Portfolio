import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import projects from '../utils/projects.json'
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className="appJsx marginTop" >
            {projects.map((project) => (
                <Card key={project.id} sx={{ maxWidth: 300, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center', margin: '20px' }}>
                    <CardMedia
                        sx={{ height: 100 }}
                        image={project.img}
                        title={project.title}
                    />
                    <CardContent>
                        <Typography sx={{ color: '#90caf9' }} gutterBottom variant="h5" component="div">
                            {project.title}
                        </Typography>
                        <Typography variant="body2" align='justify' color="text.secondary">
                            {project.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Link to={project.github}><Button size="small">Github Repo</Button></Link>
                        <Link to={project.url}><Button size="small">URL</Button></Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Portfolio;