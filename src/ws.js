
const WebSocketClient = require('websocket').w3cwebsocket;

export const ws = new WebSocketClient(`wss://stream.binance.com:9443/ws/btcusdt@miniTicker`);

ws.onopen = () => {
    console.log('WebSocket connection opened');
};

ws.onclose = () => {
    console.log('WebSocket connection closed');
};
