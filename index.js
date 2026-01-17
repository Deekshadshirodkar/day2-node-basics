const math = require('./mathUtils');
console.log("Hello Node!"); 
console.log("5 + 3 =", math.add(5, 3)); 

const fs = require('fs'); 
const path = require('path'); 
 
fs.readFile(path.join(__dirname, 'message.txt'), 'utf8', (err, data) => { 
if (err) throw err; 
console.log("Content from file:", data); 
}); 

const f = require('fs'); 
const pathf = require('path'); 
 
f.readFile(pathf.join(__dirname, 'message.txt'), 'utf8', (err, data) => { 
if (err) throw err; 
console.log("Content from file:", data); 
});
fs.writeFile(pathf.join(__dirname, 'experiment.txt'), 
'I am a full stack developer.',
'utf8', 
(err) => { 
if (err) throw err; 
console.log('File created successfully.'); 
});