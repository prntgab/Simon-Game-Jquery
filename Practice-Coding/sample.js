const fs = require('fs');
fs.readFile("readMe.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }); 