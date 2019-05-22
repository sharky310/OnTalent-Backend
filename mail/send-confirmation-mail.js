const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY,process.env.MAILJET_API_SECRET_KEY);


async function sendConfirmationMail(user){

    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
        "Messages":[
                {
                "From": {
                        "Email": "OnTalentApp@gmail.com",
                        "Name": "OnTalent Info"
                },
                "To": [
                        {
                        "Email": user.email,
                        "Name": user.first_name,
                        }
                ],
                "Subject": "Activate your account",
                "TextPart": "Welcome to the company. We need activate your account and start to work and enjoying ",
                //TODO customize the mail template
                "HTMLPart": "<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!"
                }
        ]
    })

}

async function sendEventMail(user){};

module.exports = sendConfirmationMail, sendEventMail;