import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import createWebSocket from './ws';

const App = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);
  const [bnbPrice, setBnbPrice] = useState(null);
  const [dogePrice, setDogePrice] = useState(null);

  useEffect(() => {
    const btcSocket = createWebSocket('btcusdt');
    const ethSocket = createWebSocket('ethusdt');
    const bnbSocket = createWebSocket('bnbusdt');
    const dogeSocket = createWebSocket('dogeusdt');

    btcSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setBtcPrice(data.c);
    };

    ethSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setEthPrice(data.c);
    };

    bnbSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setBnbPrice(data.c);
    };

    dogeSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setDogePrice(data.c);
    };

    return () => {
      btcSocket.close();
      ethSocket.close();
      bnbSocket.close();
      dogeSocket.close();
    };
  }, []);

  return (
    <div>
      <h1>BTC USD: {Number(btcPrice) || 'Carregando...'}</h1>
      <h1>ETH USD: {Number(ethPrice) || 'Carregando...'}</h1>
      <h1>BNB USD: {Number(bnbPrice) || 'Carregando...'}</h1>
      <h1>DOGE USD: {Number(dogePrice) || 'Carregando...'}</h1>
    </div>

    /* <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider> */

  );
};

export default App;


