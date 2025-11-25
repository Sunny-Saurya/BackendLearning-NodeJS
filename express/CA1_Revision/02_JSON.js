import fs from 'fs';

const data = {
    Name: 'Sunny',
    RegNo: '12301053',
    Course: 'B.Tech',
    Domain: "CSE"
}

fs.writeFile('user.json', JSON.stringify(data), () => {})

fs.readFile("user.json", "utf8", (err, data) => {
    console.log(JSON.parse(data));
});
