const dns = require('dns');

dns.lookup('index.rightknights.com', (err, address, family) => {
console.log('地址: %j 地址族: IPv%s', address, family);
});