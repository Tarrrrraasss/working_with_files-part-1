const fs = require('fs');

function moveFile(sourcePath, destinationPath) {
  fs.rename(sourcePath, destinationPath, function (err) {
    if (error) {
      console.log('Під час переміщення файлу сталася помилка', error);
    } else {
      console.log(`File moved from ${sourcePath} to ${destinationPath}`);
    }
  });
}

moveFile('first_folder/hello.txt', 'second_folder/hello.txt');