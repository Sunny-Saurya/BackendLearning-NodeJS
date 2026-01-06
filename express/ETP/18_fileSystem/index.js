import fs from 'fs'

fs.writeFile("data.txt", 'hey there !!', (err) => {
    if(err){
        console.log("Error while Writing data");
        
    }else{
        console.log("Succesfully Writen !!");
        
    }
})

fs.readFile("data.txt", 'utf8', (err,data) => {
     if (err) {
                console.log("Error reading file");
            } else {
                console.log("File content:");
                console.log(data);
            }
})