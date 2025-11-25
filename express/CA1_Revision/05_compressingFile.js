import fs, { ReadStream } from 'fs'
import zlib from 'zlib'

// create a readstream

const readStream = fs.createReadStream('data.txt')

// create a writestream

const writeStream = fs.createWriteStream('data.txt.gz')

// compressing with gzip();

    readStream.pipe(zlib.createGzip()).pipe(writeStream);

console.log("Successfully Compressed !!");
