//required by gatsby
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

//Connect Mailgun API wrapper
const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

//Res
const successCode = 200;
const errorCode = 400;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Conntrol-Allow-Headers": "Content-Type",
  "Content-type": "text/html; charset=utf-8",
};

//Cloud Func.
exports.handler = (event, context, callback) => {
  let data = JSON.parse(event.body);
  let { name, company, mail, subject, message } = data;
  let mailOptions = {
    from: `${name} <${mail}>`,
    to: process.env.SITE_EMAIL_ADDRESS,
    replyTo: mail,
    subject: `${subject}`,
    html: `
      <html>
        <body>
          <p><strong>Name:</strong> ${name}</p>
          <br/>
          <p><strong>Company:</strong> ${company}</p>
          <br/>
          <p><strong>Message</strong>${message}</p>
          <br/>
          <br/>
          <p><em>This message was sent from the WayfareStudios.com contact form.</em></p>
        </body>
      </html>
      `,
  };

  //Mailgun
  mg.message().send(mailOptions, (error, body) => {
    if (error) {
      callback(null, {
        errorCode,
        headers,
        body: JSON.stringify(error),
      });
    } else {
      callback(null, {
        successCode,
        headers,
        body: JSON.stringify(body),
      });
    }
  });
};
