import fs from 'fs'

fs.writeFile("data.txt", "Hey THere !!", err => {
    if(err) console.log('Error Creating File !!');
    console.log("Successfully Written!!");  
})

fs.readFile("data.txt", "utf8", (err, data) => {
    if(err) console.log("Error Reading File !!");
    console.log(data)
    
})

fs.appendFile("data.txt", "What are you doing !!", () => {})

// fs.unlink("data.txt", () => {})