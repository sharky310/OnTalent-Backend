
const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY,process.env.MAILJET_API_SECRET_KEY);

/**
 * The function in this module have a function of sendMail when the system create a user 
 * @param {*} user - We need user data for extract the email to send
 */
async function sendConfirmationMail(user){

        const verification_route = "https://ontalent.herokuapp.com/api/account/activate?verification_code="+user.verification_code;

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
                "HTMLPart": `<h3>Welcome to your company!</h3><br /><p>We need you to confirm your account at the following link</p><br /><a href="${verification_route}">Link to activate</a>`
                }
        ]
    })

}

module.exports = sendConfirmationMail;