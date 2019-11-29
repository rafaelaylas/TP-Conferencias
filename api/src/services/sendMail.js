const { config } = require('../config');
const API_KEY = config.mailgunKey;
const DOMAIN = config.mailgunDomain;

class SendMail {
  constructor() {
    this.mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
  }

  sendList(mailsList, { conference }) {
    const data = {
      from: 'Conferencias <me@samples.mailgun.org>',
      subject: `La conferencia ${conference.title} fue cancelada ☠️`,
      text: `Lo sentimos la conferencia ${conference.title} del ${conference.date} fue cancelada 😢.`,
    };
    mailsList.forEach( email => {
      this.sendTo({ ...data, to: email  })
    })
  }

  sendTo(data){
    this.mailgun.messages().send(data, function (error, body) {
        if (error){
            console.log(error);
        }
      console.log(body);
    });
  }
}

module.exports = SendMail;