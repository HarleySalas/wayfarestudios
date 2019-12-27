// //required by gatsby
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Connect Mailgun API wrapper
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

//Res
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

//Cloud Func.
exports.handler = function(event, context, callback) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 200,
      headers,
      body: "This was not a POST request!",
    };
  }

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
          <p><strong>Name:</strong><br/>${name}</p>
          <br/>
          <p><strong>Company:</strong><br/>${company}</p>
          <br/>
          <p><strong>Message:</strong><br/>${message}</p>
          <br/>
          <p><em>This message was sent from the WayfareStudios.com contact form.</em></p>
        </body>
      </html>
      `,
  };

  // //Mailgun
  mailgun.messages().send(mailOptions, (error, body) => {
    if (error) {
      callback(null, {
        statusCode: 400,
        headers,
        body: JSON.stringify(error),
      });
    } else {
      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(body),
      });
    }
  });
};
