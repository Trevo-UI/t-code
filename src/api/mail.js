"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var nodemailer_1 = require("nodemailer");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/api/send-email', function (_a) {
    var req = _a.req, res = _a.res;
    var _b = req.body, name = _b.name, email = _b.email, phone = _b.phone, option = _b.option, message = _b.message;
    var transporter = nodemailer_1.default.createTransport({
        host: process.env.HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    var mailOptions = {
        from: '"T-Code Soluções" <process.env.EMAIL>',
        to: 'comercial@tcodesolucoes.com',
        subject: "option: ".concat(option),
        text: "Name: ".concat(name, "\nEmail: ").concat(email, "\nPhone: ").concat(phone, "\nMessage: ").concat(message)
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error.message);
            res.status(500).send('Error sending email');
        }
        else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully');
        }
    });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
