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

export default function CreateAccount() {
    return (
      <Box>
          <Header/>
          <Container maxWidth="sm">
          <Box sx={{ my: 24 }}>
              <Typography variant="p" component="h1" gutterBottom sx={{ mb: 2 }}>
              Crea tu cuenta
              </Typography>
              <Typography variant="p" component="p" gutterBottom sx={{ mb: 4 }}>
                  En tan solo 5 minutos ya podras publicar tus servicios
              </Typography>
              <Box maxWidth="sm">
                <TextField fullWidth label="Nombre" id="name" sx={{ mb: 2 }} />
                <TextField fullWidth label="Email" id="mail" sx={{ mb: 2 }} />
                <TextField fullWidth label="Contraseña" id="password" type='password' sx={{ mb: 2 }} />
                  <Button size="large" variant="contained" component={Link} noLinkStyle href="#">
                      Crea tu cuenta
                  </Button>
              </Box>
          </Box>
          </Container>
      </Box>
    );
  }