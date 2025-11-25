const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve("Task Completed !!")
    }else{
        reject("Errror !!")
    }
})

myPromise.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
    
})

const myPromise2 = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
        if(success){
            resolve("SuccessFully Executed !!");
            
        }else{
            reject("REjected !!")
        }
    }, 2000);
})

myPromise2.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(message);
})