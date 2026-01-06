import fs from 'fs';
import zlib from 'zlib';

// Create read & write streams
const input = fs.createReadStream("input.txt");
const compressed = fs.createWriteStream("input.txt.gz");

// Compress file
const gzip = zlib.createGzip();
input.pipe(gzip).pipe(compressed);

console.log("File compressed successfully");


// Decompressed File
const compressInput = fs.createReadStream("input.txt.gz")
const decompressOutput = fs.createWriteStream("input.txt")

const gunzip = zlib.createGunzip()
compressInput.pipe(gunzip).pipe(decompressOutput)

console.log("File decompressed successfully");
