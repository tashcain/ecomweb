const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const Cors = require('cors');

const app = express();
app.use(Cors());


//body-parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("hello");
})

app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phn_No.: ${req.body.phn}</li>
      <li>Tea: ${req.body.teatype}</li>
      <li>Quantity: ${req.body.quantity}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'shubham0baswal8@gmail.com', // generated ethereal user
        pass: 'navigater@1'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"shubham" <shubham0baswal8@gmail.com>', // sender address
      to: 'shubhambaswal10@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (res,error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.send(info.response);

  });
  });

// <<<<<<< HEAD
//   app.use(express.static(path.join(__dirname, 'lmatui/build')));

//   app.use((req, res) => {
//     res.sendFile(path.join(__dirname, 'lmatui', 'build', 'index.html'))
//   })
//   if (process.env.NODE_ENV === 'production') {
//     // app.use((req, res) => {
//     //   res.sendFile(path.join(__dirname, 'lmatui', 'build', 'index.html'))
//     // })
//     app.use(express.static('lmatui/build'));
      
//     app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, 'lmatui', 'build', 'index.html'));
//     });
//   }
// =======

// app.use(express.static(path.join(__dirname, 'lmatui/build')));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, 'lmatui', 'build', 'index.html'))
// })
// if (process.env.NODE_ENV === 'production') {
//   // app.use((req, res) => {
//   //   res.sendFile(path.join(__dirname, 'lmatui', 'build', 'index.html'))
//   // })
//   app.use(express.static('lmatui/build'));
    
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'lmatui', 'build', 'index.html'));
//   });
// }

app.use(express.static(path.join(__dirname, 'lmatui/build')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'lmatui', 'build', 'index.html'))
})
if (process.env.NODE_ENV === 'production') {
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'lmatui', 'build', 'index.html'))
  })
}




// End
var port = process.env.PORT || 4000;
app.listen(port, console.log(`server started at port:${port}`));

