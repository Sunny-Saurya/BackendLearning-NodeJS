import fs from 'fs'

const user = {
    name : 'Sunny',
    subject: 'Backend'
}

const jsonData = JSON.stringify(user);
console.log(jsonData);

fs.writeFile('02_json.txt', jsonData, (err) => {
    if(err) console.log("Error Writing");
    else console.log("Successfully Written !!");
    
})
