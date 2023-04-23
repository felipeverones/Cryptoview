import PropTypes from 'prop-types';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { CryptoChart } from '../../../components/MyChart';

// ----------------------------------------------------------------------

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array,
  chartLabels: PropTypes.arrayOf(PropTypes.string),
};

export default function AppWebsiteVisits({ title, symbol, subheader, ...other }) {

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">

        <CryptoChart symbol={symbol}/>
      </Box>
    </Card>
  );
}
