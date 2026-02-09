import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import sizeData from '../assets/sizes.json';
import type { SizeTableData, PriceTableData } from '../types/types';

import priceDataJson from '../assets/prices.json';
import BackButton from '../components/BackButton';
import BasszButton from '../components/BasszButton';

export default function PolokHoodiePage() {
  const sizeChartData: SizeTableData[] = sizeData;
  const priceTableData: PriceTableData = priceDataJson;
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, margin: '0 auto' }}>
      <BackButton />
      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        Pólók és hoodiek
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <strong>Árak:</strong>
        <TableContainer component={Paper} variant="outlined">
          <Table aria-label="árlista táblázat">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>
                  <strong>Lej (RON)</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Póló ár</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Hoodie ár</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {priceTableData.tshirt.map((price, index) => (
                <TableRow key={index} hover>
                  <TableCell component="th" scope="row">
                    {priceTableData.titles[index]}
                  </TableCell>
                  <TableCell align="center">{price}</TableCell>
                  <TableCell align="center">{priceTableData.hoodie[index]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <BasszButton component="a" href="https://forms.gle/sNSzh97oqe3nKXYTA" target="_blank" rel="noopener noreferrer">
          Rendelési Form
        </BasszButton>
      </Stack>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <strong>Befizetési információk:</strong>
        <br /> {/* Hey, follow this link to send me money on Revolut: https://revolut.me/markuci14 */}
        <strong>Revolut:</strong> +40 757 803 704 /{' '}
        <a
          href="https://revolut.me/markuci14"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#d40201', textDecoration: 'none' }}
        >
          @markuci14
        </a>
        <br />
        <strong>BT Pay:</strong> +40 757 803 704
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Lennebb található a mérettáblázat.
      </Typography>

      {sizeChartData.map((tableData) => (
        <Accordion key={tableData.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${tableData.id}-content`}
            id={`${tableData.id}-header`}
          >
            <Typography variant="h6">{tableData.title}</Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ p: isMobile ? 1 : 2 }}>
            <TableContainer component={Paper} variant="outlined">
              <Table size="small" aria-label={`${tableData.title} mérettáblázat`}>
                {isMobile ? (
                  <>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell>
                          <strong>cm</strong>
                        </TableCell>
                        <TableCell align="center">
                          <strong>Testhossz</strong>
                        </TableCell>
                        <TableCell align="center">
                          <strong>Mellbőség</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableData.sizes.map((size, index) => (
                        <TableRow key={size}>
                          <TableCell component="th" scope="row">
                            <strong>{size}</strong>
                          </TableCell>
                          <TableCell align="center">{tableData.length[index]}</TableCell>
                          <TableCell align="center">{tableData.chest[index]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </>
                ) : (
                  <>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell>
                          <strong>cm</strong>
                        </TableCell>
                        {tableData.sizes.map((size) => (
                          <TableCell key={size} align="center">
                            <strong>{size}</strong>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Testhossz
                        </TableCell>
                        {tableData.length.map((val, index) => (
                          <TableCell key={index} align="center">
                            {val}
                          </TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Mellbőség
                        </TableCell>
                        {tableData.chest.map((val, index) => (
                          <TableCell key={index} align="center">
                            {val}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </>
                )}
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
