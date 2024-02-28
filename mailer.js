nodemailer = require('nodemailer'); // import nodemailer 
object  = require('./index.js')

//creating a nodemailer transporter with gmail smtp settings 
transporter = nodemailer.createTransport ( {
    host:"smtp.gmail.com", //SMTP Server hostname for Gmail  
    port:465, // SMTP port for secure connection
    secure:true, //use secure connection SSL 
    
    auth : {
        user:'yourmail@gmail.com', //Gmail account username 
        pass:'give your password' //Gmail account app password

    }
})

//Define the email details and content 
mail = {
    from:'fromemail@gmail.com',
    to:'toemail@gmail.com',
    subject:'OTP',
    text:`Hello user ,welcome to our ADIT Course!.your otp is ${genotp()}`
}

//send mail 
transporter.sendMail(mail,(err,data) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})

