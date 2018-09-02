const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
  if (err) throw err;
  console.log('로그 기록.');
  console.log(data.toString());
});
