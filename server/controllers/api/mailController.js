const router = require('express').Router();
const sgMail = require('@sendgrid/mail');
const path = require('path')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const fs = require('fs')
const util = require('util')
readFile = util.promisify(fs.readFile)

const MSG = data => ({
    to: 'michael.zanercik@gmail.com',
    from: 'michael.zanercik@gmail.com',
    subject: 'Striker Soccer Center Confirmation',
    text: 'Confirmation of Reservation',
    html: data.html,
});

const sendMail = (data) => new Promise((resolve, reject) => {
    try {
        sgMail.send(MSG(data));
        resolve("Message Sent")
    } catch (error) {
        reject(error)
    }
})


router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        html = await readFile(path.join(__dirname, '..', '..', 'lib', 'emailTemplate', 'confirmation.html'), 'utf8')
        html = html.replace("{{name}}", req.body.email)
        html = html.replace("{{field}}", req.body.field)
        html = html.replace("{{date}}", req.body.date)
        
        const response = sendMail({...req.body, html})
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;