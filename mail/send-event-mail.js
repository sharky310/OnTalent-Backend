const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY,process.env.MAILJET_API_SECRET_KEY);

async function sendEventMail(user){};

module.exports = sendEventMail;