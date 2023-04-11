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

export default function Search() {
  return (
    <Box>
        <Header/>
        <Container maxWidth="md">
        <Box sx={{ my: 24 }}>
            <Typography variant="p" component="h1" gutterBottom sx={{ mb: 2 }}>
            Busca un servicio
            </Typography>
            <Typography variant="p" component="p" gutterBottom sx={{ mb: 4 }}>
                La persona correcta, al precio justo, con la confianza que necesitas
            </Typography>
                <TextField fullWidth label="¿Que necesitas?" id="fullWidth" sx={{ mb: 2 }} />
                <Button size="large" variant="contained" component={Link} noLinkStyle href="#">
                    Buscar
                </Button>
            <Box sx={{ my: 34 }}>
                <Copyright />
            </Box>
        </Box>
        </Container>
    </Box>
  );
}