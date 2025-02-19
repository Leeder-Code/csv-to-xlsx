# CSV to XLSX Converter

This is a simple Node.js script that converts all CSV files from the `csv/` directory into XLSX files and saves them in the `xlsx/` directory.

## Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install required dependencies:

```sh
npm install xlsx
```

## Usage

1. Place your CSV files inside the `csv/` directory.
2. Run the script:

```sh
node index.js
```

3. The converted XLSX files will be available in the `xlsx/` directory.

## Script Explanation

- Reads all `.csv` files from the `csv/` directory.
- Converts each file to an XLSX format using the `xlsx` package.
- Saves the converted file in the `xlsx/` directory with the same filename but with an `.xlsx` extension.

## Notes

- Ensure your CSV files are encoded in UTF-8 to avoid character encoding issues.
- The script creates the `xlsx/` directory if it doesn't exist.

## Dependencies

- [xlsx](https://www.npmjs.com/package/xlsx) - Library for handling Excel files in Node.js
- `fs` - Node.js file system module
- `path` - Node.js path module
