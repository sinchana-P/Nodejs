const fs = require('fs')
fs.writeFileSync("hello.txt", "Hello World!")

console.log("->>", __dirname);
console.log("->>", __filename);

