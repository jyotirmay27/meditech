const nodemailer = require("nodemailer");

var userEmail = '';
var userName = '';
var url = '';

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'meditech.atyourhelp@gmail.com',
      pass: 'HelloWorld'
    }
  });
  
  var mailOptions = {
    from: 'meditech.atyourhelp@gmail.com',
    to: userEmail,
    subject: 'Forgot Password',
    html: `<p>Hey ${userName},</p>
    <p>We heard that you forgot your password. Sorry about that!</p>
    <p>But don’t worry! You can use the following link to reset your password:</p>
    <a href=${url}>${url}</a>
    <p>If you don’t use this link within 1 hour, it will expire.</p>
    <p>Regards MediTech</p>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
