/*Dec 4,2019
  Frederick Lee/Jay Z
*/

const net = require('net');

const server = net.createServer();

const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.resume();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

server.on('connection', client => {
  client.setEncoding('utf8');
  console.log('New client connected!');
  client.write('Hellow there!');

  client.on('data', data => {
    console.log('Message from client:', data);
  });

  stdin.on('data', data => {
    if (data === '\\q\n') {
      client.end();
      process.exit();
    }
    client.write(data);
  });
});
