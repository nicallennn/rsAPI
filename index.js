// imports
const express = require('express');
const morgan = require('morgan');
const router = require('./router');


// init the hostname and port
const hostname = 'http://localhost';
const port = 8080;

// init the app
const app = express();

// add the middleware
app.use(morgan('short'));
app.use(express.json());
app.use(router);


//connect to db and start the server
app.listen(port, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});