import BasszButton from './BasszButton';
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Stack sx={{ mb: 5, mt: 0 }}>
      <BasszButton onClick={() => navigate(-1)}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArrowBackIcon />
          Vissza
        </Box>
      </BasszButton>
    </Stack>
  );
}
