const nodemailer = require("nodemailer");

exports.sendErrorMail = async () => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "parjanyamodi@gmail.com",
            pass: "WinMac@2020gmail",
        },
    });
    var mailOptions = {
        from: "parjanyamodi@gmail.com",
        to: `${res[0].email}`,
        subject: "Error in Website",
        text: `${error}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            return null;
        }
    });

}