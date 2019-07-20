var express = require('express');
var ejs = require('ejs');

let app = express();

let htmlcode = "<h1 style='color:blue'>How are you</h1>";

app.get('/', (req, res)=>{

	res.render('./content.ejs', {htmlcode});
});

app.get('/get', (req, res)=>{
	console.log('hey i am get');
	res.send(htmlcode);
})
app.listen(3000, (a, b)=>{
	console.log('server is running');
})