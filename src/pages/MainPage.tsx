import { Container, Button, Stack, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BasszButton = styled(Button)({
  fontSize: '1.5rem',
  backgroundColor: '#d40201',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#a30101',
  },
});

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack spacing={3}>
        <BasszButton variant="contained" onClick={() => navigate('/polok-hoodie')}>
          Polok és hoodie
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/elerhetosegek')}>
          Elérhetőségek
        </BasszButton>
      </Stack>
    </Container>
  );
}
