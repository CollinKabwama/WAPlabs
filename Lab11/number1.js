const dns = require('dns')

const ipAddress1 = dns.lookup('www.miu.edu', function (err, address, family) {
    console.log(address);
});

const ipAddress3 = dns.resolve4('www.miu.edu', function (err, address, family) {
    console.log(address);
});
