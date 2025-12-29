import fs from 'fs'

const user = {
    name : 'Sunny',
    subject: 'Backend'
}

const jsonData = JSON.stringify(user);
console.log(jsonData);

// converting json to js object

const jsData = JSON.parse(jsonData);
console.log(jsData);


fs.writeFile('02_json.txt', jsonData, (err) => {
    if(err) console.log("Error Writing");
    else console.log("Successfully Written !!");
    
})

// reading from json file

fs.readFile('02_json.txt', 'utf8', (err, data) => {
    if(err) console.log("Error Reading!!");
    else {
        console.log("Successfully Read!!");
        console.log(data);
    }
})
