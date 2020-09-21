//https://github.com/expressjs/cors

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

let response;

//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: '*/*'}));

app.use(cors());
//Serve the page
app.use(express.static('app'));

//Access the parse results as request.body
app.post('/preferences', (req, res,) => {
  	res.json(req.body);
  	console.log(req.body);
});

app.post('/cookies', (req, res) => {

	const cookieVal = req.body.policyResponse;
	console.log(req.body.policyResponse);

	const cookieOptions = {
		expires: new Date(Date.now() + 1000)
	}

	res.cookie('policyResponse', cookieVal, cookieOptions).redirect('/index.html');
	console.log(res);
});

app.listen(3000, () => {
 	console.log('Server running on port 3000');
});