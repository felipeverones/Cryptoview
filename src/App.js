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
import { ws } from "./ws";

// ----------------------------------------------------------------------

export default function App() {
  // const [socket, setSocket] = useState(null);
  const [price, setPrice] = useState(null);

  const handlePriceUpdate = (newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    ws.onmessage = (message) => {
      const data = JSON.parse(message.data);
      // handlePriceUpdate(data.c);
      console.log(`data ${data.c}`);
      setPrice(data.c);
    };
  }, []);

  return (

    <div>
      <h1>Preço do Bitcoin:</h1>
      <h2>{Number(price).toFixed(2)}</h2>
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
}