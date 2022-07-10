const nodemailer = require("nodemailer");

const sendErrorMail = async (url, e) => {
    console.log("Response \nURL: ", url.url, "\nName: ", url.name, "\nError: ", e.message ? e.message : e, "\n")

}
module.exports = sendErrorMail