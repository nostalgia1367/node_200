const fs = require('fs');

let contents = "";
contents += "<html><head><title>하하하</title>\n";
contents += "<body>\n";
contents += "바디121212444바디\n";
contents += "</body>\n";
contents += "</html>\n";

fs.writeFile('./message.txt', contents);


//파일 쓰기 예제