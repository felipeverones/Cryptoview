import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card } from '@mui/material';
// components
import { CryptoPrices } from '../components/CryptoPrices';
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Crypto View </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Crypto View
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary symbol="btcusdt" style={{backgroundColor:"rgb(100,150,200)"}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary symbol="ethusdt" style={{backgroundColor:"rgb(100,200,200)"}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary symbol="bnbusdt" style={{backgroundColor:"rgb(100,120,200)"}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary symbol="dogeusdt" style={{backgroundColor:"rgb(50,160,200)"}}/>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AppWebsiteVisits
              title="BTC Price History"
              subheader="Updated every hour"
              symbol="BTCUSDT"
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AppWebsiteVisits
              title="ETH Price History"
              subheader="Updated every hour"
              symbol="ETHUSDT"
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AppWebsiteVisits
              title="BNB Price History"
              subheader="Updated every hour"
              symbol="BNBUSDT"
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AppWebsiteVisits
              title="DOGE Price History"
              subheader="Updated every hour"
              symbol="DOGEUSDT"
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
