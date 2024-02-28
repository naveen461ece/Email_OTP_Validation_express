express = require('express');
otpgen = require('otp-generator'); 
ejs = require('ejs');
app = express(); 
port = 3000 ; 

app.set('view engine', ejs)
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res) => {
    res.render('verify.ejs')
})
app.listen(port,()=> {
    console.log(`server is running on port ${port}`);
})

genotp = () => {
    OTP = otpgen.generate(6,{digits:true,lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false});
    console.log(OTP);
    return OTP;
}

genotp()

// app.get('/',(req,res) => {
//     res.send(`<h1>your OTP is : </h1>` + genotp())
// })

app.post('/verify',async(req,res) => {

    userOTP = req.body.userotp ; // OTP entered by the user in the form 
    if(userOTP === OTP ) {
        res.render('home.ejs');
        //res.send('Thank you user , your OTP is successfully verified NOW YOU CAN ACEESS OUR RESOURCES AND SERVICES')
    }
    else {
        res.send('Your OTP is not verified , PLEASE enter correct otp');
    }
}) 
module.exports.genotp = genotp;

