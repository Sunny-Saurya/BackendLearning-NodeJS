import fs from 'fs';
import zlib from 'zlib'

const gunzip = zlib.createGunzip();
const input = fs.createReadStream('01_data.txt.gz');
const output = fs.createWriteStream('02_data.txt');

if(input.pipe(gunzip).pipe(output)){
    console.log("Decompressed Successfully!!");
    
}
else{
    console.log("Error Decompressing !!");
}