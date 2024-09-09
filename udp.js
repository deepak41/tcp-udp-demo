const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
  console.log(`Server got message: ${msg}`);
  console.log(`From client: ${rinfo.address}:${rinfo.port}`);
});

PORT = 5000
socket.bind(PORT);
console.log("Server is running on localhost:" + PORT);
