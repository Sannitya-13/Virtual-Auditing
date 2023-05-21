
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 5500 });

server.on('connection', (ws) => {
  console.log('WebSocket connection established');

  // Simulate sending real-time updates
  setInterval(() => {
    const temperature = Math.random() * 100;
    const fanSpeed = Math.random() * 100;
    const lightBrightness = Math.random() * 100;

    const data = JSON.stringify({ temperature, fanSpeed, lightBrightness });
    ws.send(data);
  }, 5000);

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

