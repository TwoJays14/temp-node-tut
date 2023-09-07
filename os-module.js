'use strict';

const os = require('os');

// info about current user

const user = os.userInfo()


// method returns the system uptime in seconds

console.log();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMeme: os.freemem()
}

console.log(currentOS)
