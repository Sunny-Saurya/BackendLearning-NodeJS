import fs from 'fs'
import zlib from 'zlib'

fs.createReadStream('data.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('output.txt'))

console.log("Decompressed Successfully");
