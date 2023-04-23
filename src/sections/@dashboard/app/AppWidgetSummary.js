// @mui
import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';
import { CryptoPrices } from '../../../components/CryptoPrices';

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  symbol: PropTypes.string,
  total: PropTypes.number,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({symbol, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h4">
        <CryptoPrices symbol={symbol}/>
      </Typography>

    </Card>
  );
}
