const express = require('express');

const cors = require('cors');

const app = express();

const { config } = require('./config/index');

const conferencesApi = require('./routes/conferences.js');

const usersApi = require('./routes/users');

// const userMoviesApi = require('./routes/userMovies');


//middleWare de body parser
app.use(express.json());
app.use(cors());


//routes
conferencesApi(app);
usersApi(app);
// userMoviesApi(app);


app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`);
});

