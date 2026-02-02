import { Button, Stack } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

export default function Apps() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
      <Button
        href="https://apps.apple.com/ro/app/kmdsz-a-k%C3%A1rtya/id1658216731"
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        startIcon={<AppleIcon />}
        sx={{
          height: 52,
          px: 2.5,
          borderRadius: '10px',
          borderColor: '#000',
          color: '#000',
          textTransform: 'none',
          fontSize: '0.85rem',
          lineHeight: 1.2,
          '&:hover': {
            borderColor: '#000',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
          },
        }}
      >
        <span>
          <strong>Download on the App Store</strong>
          <br />
          iOS
        </span>
      </Button>

      <Button
        href="https://akartyabucket.s3.eu-north-1.amazonaws.com/release+android/app-release.apk"
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        startIcon={<AndroidIcon />}
        sx={{
          height: 52,
          px: 2.5,
          borderRadius: '10px',
          borderColor: '#3DDC84',
          color: '#3DDC84',
          textTransform: 'none',
          fontSize: '0.85rem',
          lineHeight: 1.2,
          '&:hover': {
            borderColor: '#3ddc84',
            backgroundColor: 'rgba(61, 220, 132, 0.08)',
          },
        }}
      >
        <span>
          <strong>Download APK</strong>
          <br />
          Android
        </span>
      </Button>
    </Stack>
  );
}
