const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY,process.env.MAILJET_API_SECRET_KEY);


async function sendMail(mail){

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
                        "Email": mail,
                        "Name": "User"
                        }
                ],
                "Subject": "Your email flight plan!",
                "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                "HTMLPart": "<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!"
                }
        ]
    })

}

module.exports = sendMail;