const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c3b8afce57277c",
    pass: "3df50f52fd7859"
  }
});