const fs = require('fs');

function deleteFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Файл "${filePath}" був видалений`);
    } else {
      console.log(`Файл "${filePath}" не існує`);
    }
  } catch (error) {
    console.error(error);
  }
}

deleteFile('Hello.txt');