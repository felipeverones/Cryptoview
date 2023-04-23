import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import createWebSocket from '../ws';

export function CryptoPrices({ symbol }) {
  const [symbolPrice, setSymbolPrice] = useState(null);

  const [symbol24h, setSymbol24h] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const { data: symbolData } = await axios.get(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}`
        );

        setSymbol24h(parseFloat(symbolData.lastPrice).toFixed(2));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrices();

    const symbolSocket = createWebSocket(`${symbol}`);

    symbolSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setSymbolPrice(data.c);
    };

    return () => {
      symbolSocket.close();
    };
  }, []);

  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h4>{symbol.toUpperCase()}</h4>
        <h3>{Number(symbolPrice) || symbol24h || 'Carregando...'}</h3>
      </div>
    </div>
  );
}
