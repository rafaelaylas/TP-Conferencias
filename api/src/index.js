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



var api_key = 'a2c252147f60589d9e65cf9c84f1c6d2-e470a504-4a28ccba';
var domain = 'sandboxd9eaf9726d4847a38d6161844652844d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Conferencias <me@samples.mailgun.org>',
  to: 'rafaelaylas@hotmail.com',
  subject: 'Hello World',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
    if (error){
        console.log(error);
    }
  console.log(body);
});