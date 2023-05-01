const fs = require('fs');

function readAndPrintFileContent(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

readAndPrintFileContent('hello.txt');