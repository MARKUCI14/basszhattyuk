import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import type { ContactInfo } from '../types/types';
import contactData from '../assets/contacts.json';

export default function ContactPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        Contacts
      </Typography>

      {contactData.map((contact: ContactInfo) => (
        <Accordion key={contact.name} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{contact.name}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Link href={`tel:${contact.phone}`} aria-label="Call phone" underline="none" color="inherit">
                <PhoneIcon fontSize="large" />
              </Link>

              <Link href={`sms:${contact.phone}`} aria-label="Send message" underline="none" color="inherit">
                <SmsIcon fontSize="large" />
              </Link>

              {contact.instagram && (
                <Link
                  href={`https://www.instagram.com/${contact.instagram}`}
                  target="_blank"
                  rel="noopener"
                  aria-label="Open Instagram"
                  underline="none"
                  color="inherit"
                >
                  <InstagramIcon fontSize="large" />
                </Link>
              )}

              {contact.facebook && (
                <Link
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener"
                  aria-label="Open Facebook"
                  underline="none"
                  color="inherit"
                >
                  <FacebookIcon fontSize="large" />
                </Link>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
