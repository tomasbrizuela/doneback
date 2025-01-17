const nodemailer = require("nodemailer");

transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: "tomasagustinbrizuela@gmail.com",
        pass: "lekv egyu pawn xbxj",
    },
});

transporter.verify().then(() => {
    console.log("Ready to send emails");
})

module.exports = transporter;