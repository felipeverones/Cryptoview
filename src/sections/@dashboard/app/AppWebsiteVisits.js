import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { CryptoChart } from '../../../components/MyChart';


// ----------------------------------------------------------------------

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array,
  chartLabels: PropTypes.arrayOf(PropTypes.string),
};

export default function AppWebsiteVisits({ title, symbol, subheader, chartLabels, chartData, ...other }) {

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">

        <CryptoChart symbol={symbol}/>
      </Box>
    </Card>
  );
}
