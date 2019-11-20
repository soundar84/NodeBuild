var  fs  =  require('fs');
//var path  =  require('path');

 //var file  =  path.join(__dirname,  'code.json');
 
 var file  = require('./code.json');
 var stringify = fs.readFileSync(file,  'utf8');

fs.writeFileSync(`apikey.json`,JSON.stringify(stringify), 'utf-8'); 

//console.log(fs.readFileSync(file,  'utf8')); 