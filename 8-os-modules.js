const os = require('os')

// info about the current user

const user = os.userInfo()

console.log(user);

// method that returns the current runtime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOs)