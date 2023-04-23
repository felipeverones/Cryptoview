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

import ScrollToTop from './components/scroll-to-top';

import createWebSocket from './ws';




const App = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);
  const [bnbPrice, setBnbPrice] = useState(null);
  const [dogePrice, setDogePrice] = useState(null);

  const [btc24h, setBtc24h] = useState(null);
  const [eth24h, setEth24h] = useState(null);
  const [bnb24h, setBnb24h] = useState(null);
  const [doge24h, setDoge24h] = useState(null);

  useEffect(() => {

    const fetchPrices = async () => {
      try {
        const { data: btcData } = await axios.get('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
        const { data: ethData } = await axios.get('https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT');
        const { data: bnbData } = await axios.get('https://api.binance.com/api/v3/ticker/24hr?symbol=BNBUSDT');
        const { data: dogeData } = await axios.get('https://api.binance.com/api/v3/ticker/24hr?symbol=DOGEUSDT');
        setBtc24h(parseFloat(btcData.lastPrice).toFixed(2));
        setEth24h(parseFloat(ethData.lastPrice).toFixed(2));
        setBnb24h(parseFloat(bnbData.lastPrice).toFixed(2));
        setDoge24h(parseFloat(dogeData.lastPrice).toFixed(2));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrices();



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
    <div >

      <div style={{ display: "flex",alignItems:"center", justifyContent: "space-between", flexDirection: 'column' }}>
        <h2>BTC USD: {Number(btcPrice)   ||   btc24h  || 'Carregando...'}</h2>
        <h2>ETH USD: {Number(ethPrice)   ||   eth24h  || 'Carregando...'}</h2>
        <h2>BNB USD: {Number(bnbPrice)   ||   bnb24h  || 'Carregando...'}</h2>
        <h2>DOGE USD: {Number(dogePrice) ||   doge24h || 'Carregando...'}</h2>
      </div>

      <div className="App" style={{ display: "flex", justifyContent: "space-between", flexDirection: 'column' }}>
      <CryptoChart symbol="BTCUSDT" />
      <CryptoChart symbol="ETHUSDT" />
      <CryptoChart symbol="BNBUSDT" />
      <CryptoChart symbol="DOGEUSDT" />
      </div>

    </div>

    

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