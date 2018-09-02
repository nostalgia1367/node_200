const fs = require('fs');

const data = fs.readFileSync('./message.txt');
const string = data.toString();
console.log('로그 기록.');
console.log(string);

//파일 읽기 예제.
