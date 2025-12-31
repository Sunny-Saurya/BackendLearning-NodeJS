import fs, { readFile, writeFile } from 'fs';
import zlib from 'zlib';

const inputFile = readFile("01_data.txt", 'utf8', (err, data) => {
    if(err) console.log("Error Reading !!");
    else console.log(data);
    
})
console.log(inputFile);

const gzip = zlib.createGzip();

const input = fs.createReadStream('01_data.txt')
const output = fs.createWriteStream('01_data.txt.gz');

input.pipe(gzip).pipe(output);


