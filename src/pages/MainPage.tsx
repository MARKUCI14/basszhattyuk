import { Container, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BasszButton from '../components/BasszButton';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack spacing={3}>
        <BasszButton variant="contained" onClick={() => navigate('/adatok')}>
          Regisztráció és adatok
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/polok-hoodie')} disabled={true}>
          Pólók és hoodiek
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/kabanna')} disabled={true}>
          Csapatösszerázó (Kabanna)
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/elerhetosegek')}>
          Elérhetőségek
        </BasszButton>
        {/*
        <BasszButton variant="contained" onClick={() => navigate('/kabanna')} disabled={true}>
          Kabanna
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/roadmap')} disabled={true}>
          RoadMap
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/city-tour')} disabled={true}>
          City-Tour
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/klan-tour')} disabled={true}>
          Klán-Tour
        </BasszButton>
        <BasszButton variant="contained" onClick={() => navigate('/szabalyzatok')} disabled={true}>
          Szabályzatok programokra
        </BasszButton>
        */}
      </Stack>
    </Container>
  );
}
