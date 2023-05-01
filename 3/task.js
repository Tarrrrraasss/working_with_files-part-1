const fs = require('fs');

function appendContentToFile(filePath, fileContent) {
    fs.appendFile(filePath, fileContent, () => {
        console.log(`Контент "${fileContent}" було додано до файлу "${filePath}"`);
    });
}

appendContentToFile('hello.txt', 'Ваш контент');