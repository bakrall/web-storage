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
//serve the page - resolves Cannot GET / error
app.use(express.static('app'));

//access the parse results as request.body
app.post('/preferences', (req, res,) => {
  	res.json(req.body);
  	console.log(req.body);
});

app.post('/cookies', (req, res) => {

	const cookieVal = req.body.policyResponse;

	const cookieOptions = {
		/*previously expiration time was not in advance of time of cookie's creation (outdated cookie), 
		so `document.cookie` always returned "" */
		expires: new Date(Date.now() + 100000 * 360)
	}

	//at this stage cookie is set in a browser but it is deleted after redirect
	res.cookie('policyResponse', cookieVal, cookieOptions).redirect('/index.html');
});

app.listen(3000, () => {
 	console.log('Server running on port 3000');
});