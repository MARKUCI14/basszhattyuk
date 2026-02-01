import { Box, Typography, Container, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: '#f5f5f5', marginTop: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {'© '}
          <Link color="inherit" href="/basszhattyuk/">
            BasszHattyúk
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 1 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          Contributors:
          <Link color="inherit" href="https://github.com/MARKUCI14">
            Márk Portik
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
