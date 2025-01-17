const transporter = require('./nodeemailer')
const express = require('express');
const router = express.Router();
const htmlBody = require('./email');
async function mainFunc(to) {
    console.log("Email is:" + to)
    console.log(htmlBody)
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"done." <tomasagustinbrizuela@gmail.com>', // sender address
        to: to, // list of receivers
        subject: "Welcome to the [done.] newsletter 🚀", // Subject line
        html: htmlBody, // html body
    });

    if(info.messageId){
        return true;
    } else {
        return false;
    }
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


router.post('/', async (req, res) => {
    const {email} = req.body;
    console.log("Email is now: " + email)
    try {
        let response = mainFunc(email)

        if(response){
            return res.status(200).json({'Message': 'Subscribed'})
        } else {
            return res.status(400).json({"Message": 'Error'})
        }
    } catch (error) {
        return res.status(400).json({"Message": 'Error'})
    }
})

module.exports = router;