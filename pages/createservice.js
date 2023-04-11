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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';


export default function CreateService() {

    return (
      <Box>
          <Header/>
          <Container maxWidth="sm">
          <Box sx={{ my: 16 }}>
              <Typography variant="p" component="h1" gutterBottom sx={{ mb: 2 }}>
              Completa tu anuncio
              </Typography>
              <Typography variant="p" component="p" gutterBottom sx={{ mb: 4 }}>
                  Agrega una breve descripción para anuciar tu servicio o producto
              </Typography>
              <Box maxWidth="sm">
                <TextField 
                    fullWidth 
                    label="Título anuncio" 
                    id="message"
                    name="message"
                    sx={{ mb: 2 }} />
                <TextField fullWidth label="Descripción" id="description" multiline maxRows={4} rows={4} sx={{ mb: 3 }} />
                <FormControl fullWidth sx={{ mb: 3 }} >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
                <TextField fullWidth label="Región" id="region" sx={{ mb: 3 }} prefix='$' />
                  <Button size="large" variant="contained" component={Link} noLinkStyle href="#">
                      Publicar anuncio
                  </Button>
              </Box>
          </Box>
          </Container>
      </Box>
    );
  }