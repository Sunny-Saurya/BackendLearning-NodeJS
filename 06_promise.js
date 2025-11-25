const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Task complete Successfully !!")
    } else {
        reject("Task Failed !!")
    }
})

myPromise.then((message) => {
    console.log(message);

}).catch((error) => {
    console.log(error);

})



let x = 2;
let y = 3;
let result = x + y;

// Fetch and properly handle JSON + errors
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => {
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         return res.json();
//     })
//     .then((jsonData) => {
//         console.log(jsonData);
//     })
//     .catch((error) => {
//         console.error('Fetch error:', error);
//     });


// async function
async function fetchAllData() {
    let fetchData = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(await fetchData.json());
    
}

fetchAllData()