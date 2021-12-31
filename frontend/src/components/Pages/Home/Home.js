import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { Box, Container, Typography } from '@mui/material'

function Home() {
  return (
    <>
      <Header />

      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Recipe Directory
            </Typography>
            <Typography variant='h5' align='center' color='text.secondary' paragraph>
             This is recipe directory for managing daily life recipies.
            </Typography>
          </Container>
        </Box>
      </main>

      <Footer />
    </>
  )
}

export default Home
