import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Header from './header';
import { Grid, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function ListService() {

    return (
        <Box>
            <Header/>
            <Container maxWidth="sm" sx={{ my: 12}}> 
                <Typography variant="p" component="h1" gutterBottom sx={{ mb: 1 }}>
                    Mis publicaciones
                </Typography>
                <Typography variant="p" component="p" gutterBottom sx={{ mb: 3 }}>
                    Revisa y edita tus publicaciones
                </Typography>
                <Card gutterBottom sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant="p" component="h2">Gasfiter</Typography>
                        <Typography variant="p" sx={{ my: 4 }}>Ofrezco mis servicios profesionales de gasfiteria en cualquier comuna de Santiago. Tenemos mas de 10 años de experiencia en el rubro.</Typography>
                        <Typography variant="p" component="h1" gutterBottom sx={{ my: 2 }}> $25.000</Typography>
                        <Button variant="contained" component={Link} noLinkStyle href="#" sx={{ mr: 1 }}>Editar publicación</Button>
                        <Button variant="outlined" component={Link} noLinkStyle href="#">Archivar</Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography variant="p" component="h2">Electricista</Typography>
                        <Typography variant="p" sx={{ my: 4 }}>Servicios de electricidad para cualquier proyecto, residencial o industrial. Cuanto con 15 años de experiencia en todo tipo de proyectos.</Typography>
                        <Typography variant="p" component="h1" gutterBottom sx={{ my: 2 }}> $48.000</Typography>
                        <Button variant="contained" component={Link} noLinkStyle href="#" sx={{ mr: 1 }}>Editar publicación</Button>
                        <Button variant="outlined" component={Link} noLinkStyle href="#">Archivar</Button>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}