import React, { useState, useEffect } from 'react';

const WebSocketClient = require('websocket').client;

const WebSocketComponent = ({ onPriceUpdate }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocketClient(`wss://stream.binance.com:9443/ws/btcusdt@miniTicker`);

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (message) => {
      const data = JSON.parse(message.data);
      onPriceUpdate(data.c);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [onPriceUpdate]);

  return null;
};

export default WebSocketComponent;
