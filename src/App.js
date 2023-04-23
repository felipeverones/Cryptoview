import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';

// components
import { StyledChart } from './components/chart';

import { CryptoChart } from './components/MyChart';

import { CryptoPrices } from './components/CryptoPrices'

import ScrollToTop from './components/scroll-to-top';

import createWebSocket from './ws';




const App = () => {

  return (
    /* <div >

      <div style={{ display: "flex",alignItems:"center", justifyContent: "space-between", flexDirection: 'column' }}>
        <CryptoPrices symbol="BTCUSDT"/>
        <CryptoPrices symbol="BNBUSDT"/>
        <CryptoPrices symbol="ETHUSDT"/>
        <CryptoPrices symbol="DOGEUSDT"/>
      </div>

      <div className="App" style={{ display: "flex", justifyContent: "space-between", flexDirection: 'column' }}>
      <CryptoChart symbol="BTCUSDT" />
      <CryptoChart symbol="ETHUSDT" />
      <CryptoChart symbol="BNBUSDT" />
      <CryptoChart symbol="DOGEUSDT" />
      </div>

    </div> */

    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>

    


    

  );
};

export default App;


/* <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider> */