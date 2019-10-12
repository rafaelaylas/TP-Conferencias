const express = require('express');

const cors = require('cors');

const app = express();

const { config } = require('./config/index');

const conferencesApi = require('./routes/conferences.js');

const usersApi = require('./routes/users');

 const userConferencesApi = require('./routes/userConferences');


//middleWare de body parser
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//routes
conferencesApi(app);
usersApi(app);
userConferencesApi(app);


app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`);
});

