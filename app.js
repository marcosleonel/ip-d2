const http = require('http');

const options = {
  host: 'ipv4bot.whatismyipaddress.com',
  port: 80,
  path: '/'
};

http.get(options, (res) => {
  console.info("status: " + res.statusCode);

  res.on('data', (ip) => {
    console.info('IP: ' + ip);
  });
}).on('error', (error) => {
  console.error(`An error occured: ${error.message}`);
});