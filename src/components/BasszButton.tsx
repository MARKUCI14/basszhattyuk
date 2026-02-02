import { Button, styled } from '@mui/material';

const BasszButton = styled(Button)({
  fontSize: '1.5rem',
  backgroundColor: '#d40201',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#a30101',
  },
});

export default BasszButton;
