const fs = require('fs');

function createFile(filePath, fileContent) {
    fs.writeFile(filePath, fileContent, () => {
        console.log(`Файл "${filePath}" був створений з певним контентом: "${fileContent}"`);
    });
}
     
createFile('hello.txt', 'Новий файл вітає вас!');