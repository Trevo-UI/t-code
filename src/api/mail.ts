import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

interface Props {
    req: any;
    res: any;
}

app.post('/api/send-email', ({req, res}: Props) => {
    const { name, email, phone, option, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: '"T-Code Soluções" <process.env.EMAIL>',
        to: 'comercial@tcodesolucoes.com',
        subject: `option: ${option}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error.message);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully');
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
