const fs = require("fs");

const readStream = fs.createReadStream('enwik8');

let finalBuffer;

let first = true;

readStream.on('data', function (chunk) {
	if(first){
		finalBuffer = chunk;
		first = false;
	}else{
		finalBuffer = Buffer.concat([finalBuffer, chunk]);
	}
	console.log(finalBuffer.length);
});
