const router = require('express').Router();
const sgMail = require('@sendgrid/mail');
const path = require('path')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const fs = require('fs')
const util = require('util')
readFile = util.promisify(fs.readFile)

const MSG = data => ({
    to: 'bensonb10@gmail.com',
    from: 'michael.zanercik@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
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

const demo = {
    name: 'Ben',
    date: '1/13/2020',
    time: '3:00 PM'
}

router.post("/", async (req, res) => {
    try {
        html = await readFile(path.join(__dirname, '..', '..', 'lib', 'emailTemplate', 'confirmation.html'), 'utf8')
        html = html.replace("{{name}}", demo.name)
        html = html.replace("{{date}}", demo.date)
        html = html.replace("{{time}}", demo.time)
        const response = sendMail({...req.body, html})
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;