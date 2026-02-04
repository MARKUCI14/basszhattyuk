import { Stack, Box } from '@mui/material';

export default function Apps() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
      {/* App Store */}
      <Box
        component="a"
        href="https://apps.apple.com/ro/app/kmdsz-a-k%C3%A1rtya/id1658216731"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-flex',
          height: 52,
        }}
      >
        <Box
          component="img"
          src="/basszhattyuk/src/assets/badges/Download_on_the_App_Store_Badge_HU_RGB_blk_120823.svg"
          alt="Download on the App Store"
          sx={{ height: '100%' }}
        />
      </Box>

      {/* Google Play */}
      <Box
        component="a"
        href="https://play.google.com/store/apps/details?id=ro.acard.app"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-flex',
          height: 52,
        }}
      >
        <Box
          component="img"
          src="/basszhattyuk/src/assets/badges/GetItOnGooglePlay_Badge_Web_color_Hungarian.png"
          alt="Get it on Google Play"
          sx={{ height: '100%' }}
        />
      </Box>
    </Stack>
  );
}
