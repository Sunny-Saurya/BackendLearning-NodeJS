import fs from 'fs';

fs.readFile('01_data.txt', 'utf8', (err, data) => {
    if(err) console.log("Error Reading !!");
    else console.log(data);
  
})

// writting in the file

fs.writeFile('01_data.txt', "I am 21 year old.", (err) => {
    if(err) console.log("Error Writting !!");
    else console.log("Successfully Added !");
})