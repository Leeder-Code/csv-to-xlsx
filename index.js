const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const inputFolder = path.join(__dirname, 'csv');
const outputFolder = path.join(__dirname, 'xlsx');

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('Error:', err);
        return;
    }

    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.csv') {
            const inputPath = path.join(inputFolder, file);
            const outputPath = path.join(outputFolder, file.replace(/\.csv$/i, '.xlsx'));

            // UTF-8
            const workbook = xlsx.readFile(inputPath, { codepage: 65001 });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];

            const newWorkbook = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(newWorkbook, worksheet, 'Data');

            xlsx.writeFile(newWorkbook, outputPath);
            console.log(`${file} -> ${outputPath}`);
        }
    });
});
