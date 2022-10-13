const bodyParser = require('body-parser')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.json())
const nodemailer = require("nodemailer");

app.post('/mailer', (req, res) => {
    async function main() {
        var transporter = nodemailer.createTransport({
            pool: true,
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // use TLS
            auth: {
                user: "itsabhishekmehra@gmail.com",
                pass: "wugzmwxjkgwrunsh"
            },
        });

        // point to the template folder
        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve('./views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./views/'),
        };

        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions))

        // send mail with defined transport object
        var body = req.body;
        let info = await transporter.sendMail({
            from: 'itsabhishekmehra@gmail.com', // sender address
            to: body.to, // list of receivers
            subject: body.subject, // Subject line
            template: 'email',// this is the name of the template file(example: email.handlebars)
            attachments: [{filename: "image.jpg", path: "./attachments/image.jpg"}],
            context: {
                name: body.contextName, // replace {{name}} with Adebola
                place: body.contextPlace // replace {{company}} with My Company
            }
        });
        console.log(info, "hello info..\n");

        console.log("Message sent: %s", info.messageId);
    }

    main().catch(console.error);
    res.send("Message sent")
})

app.listen(4000, () => {
    console.log('Server is Running at 4000');
})
