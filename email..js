var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ss.ygabriel2007@gmail.com',
    pass: 'lvqe gdce tzuz nqrl'
  }
});

var mailOptions = {
  from: 'ss.ygabriel2007@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'lvqe gdce tzuz nqrl'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});