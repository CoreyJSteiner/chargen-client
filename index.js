const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const api_url = 'https://open-ai-charactergen.herokuapp.com/hello'

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the public directory
app.use(express.static('public'));

// Route to handle GET requests to the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
