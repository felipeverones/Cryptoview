import { w3cwebsocket as W3CWebSocket } from 'websocket';

const createWebSocket = (symbol, callback) => {
  const socket = new W3CWebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@miniTicker`);

  socket.onopen = () => {
    console.log('WebSocket connection opened');
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
  };

  socket.onmessage = (message) => {
    const data = JSON.parse(message.data);
    callback(data);
  };

  return socket;
};

export default createWebSocket; 
