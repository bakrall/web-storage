//https://github.com/expressjs/cors

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: '*/*'}));

app.use(cors());

//Access the parse results as request.body
app.post('/preferences', (req, res,) => {
  res.json(req.body);
});

app.listen(3000, () => {
 console.log('Server running on port 3000');
});