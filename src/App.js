import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import WebSocketComponent from './utils/WebSocketComponent';

// ----------------------------------------------------------------------

export default function App() {

  const [price, setPrice] = useState(null);

  const handlePriceUpdate = (newPrice) => {
    setPrice(newPrice);
  };

  return (

    <div>
      <h1>Preço do Bitcoin:</h1>
      <h2>{price}</h2>
      <WebSocketComponent onPriceUpdate={handlePriceUpdate} />
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
