import { Box, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import BasszButton from '../components/BasszButton';
import Apps from '../components/KMDSZApp';
import BackButton from '../components/BackButton';

export default function RegistrationPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, margin: '0 auto' }}>
      <BackButton />

      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        Regisztráció És Adatok
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
        Kérlek töltsétek le az új <strong>KMDSZ A Kártya</strong> alkalmazást és regisztráljatok.
      </Typography>

      <Apps />
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          mb: 4,
          p: 3,
          bgcolor: theme.palette.grey[50],
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 800 }}>
          HATARIDŐ: <span style={{ color: 'red' }}>2025 FEBRUÁR 23.</span>
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          Készítsd elő az alábbiakat a kitöltéshez:
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 2.5, m: 0 }}>
          <li>
            <strong>Személyes adatok:</strong> Név, Telefonszám, E-mail cím
          </li>
          <li>
            <strong>Személyi igazolvány száma:</strong> Seria + 6/7 Számjegy (<strong>NEM</strong> a CNP!)
          </li>
          <li>
            <strong>KMDSZ Kártya ID:</strong> A <strong>KMDSZ A Kártya</strong> alkalmazásból (A-xxxxxx formátum)
          </li>
          <li>
            <strong>Facebook profil link</strong>
          </li>
          <li>
            <strong>Fotó 1:</strong> Kép az idénre lepecsételt ellenőrzőről vagy diákigazolványról
          </li>
          <li>
            <strong>Fotó 2:</strong> PASS Kép (bármilyen fotó, amin jól látszik az arcod)
          </li>
        </Typography>
      </Paper>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <BasszButton component="a" href="https://forms.gle/b4xsixWJUPWVyY5P9" target="_blank" rel="noopener noreferrer">
          Rendes tagok Form
        </BasszButton>
        {/*
        <BasszButton component="a" href="https://forms.gle/1XoxTU86wXZ1jdG18" target="_blank" rel="noopener noreferrer">
          Külsősök Form
        </BasszButton>
        */}
      </Stack>
    </Box>
  );
}
