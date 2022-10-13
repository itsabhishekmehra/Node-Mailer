# Node-Mailer

Make a new directory/folder for the project.(Run: mkdir folder_name)

To make package.json file(Run: npm init)

To make/install node_modules folder Install Express(Run: npm i express)

Install other dependencies also.(Run: npm i nodemailer dotenv nodemailer-express-handlebars nodemon)

Installation of Nodemailer module is very important to send the mails.

For MAIL and PASSWORD, you can make the .env file in the root/project folder.

Make .gitignore file to ignore big files like node_module and security file like .env

Then write the api and full code of it.

Then Run the server.(Run: nodemon index.js)

Then hit the API by doing below steps.

API link: localhost:4000/mailer
API JSON- BODY: 
{
    "to": "duggalabhishek0@gmail.com",
    "subject": "Welcome Mail",
    "contextName": "Abhishek Mehra",
    "contextPlace": "Nav-Gurukul"
}

Hurray Mail Sent!
**Congratulations**
