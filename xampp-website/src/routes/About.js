import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { GitHub as GitHubIcon } from '@material-ui/icons';

function About() {
  return (
    <Container>
      <Typography style={{ marginTop: '50vh', textAlign: 'center' }}>
        Feito por Antonio Carlos Pimenta Junior, Gabriel Reis de Bragança
        Oliveira, Jonatan Gabriel Bortolon e Lucas Oliveira Damaceno.
      </Typography>
      <Typography style={{ marginTop: 50, textAlign: 'center' }}>
        <a href="https://github.com/JonatanBortolon/discrete-mathematics-work">
          <GitHubIcon fontSize="large" />
        </a>
      </Typography>
    </Container>
  );
}

export default About;
