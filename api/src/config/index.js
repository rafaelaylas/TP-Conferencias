require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  mailgunKey: process.env.MAILGUN_KEY,
  mailgunDomain: process.env.MAILGUN_DOMAIN,
};

module.exports = { config };