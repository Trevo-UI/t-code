import express = require('express');
import bodyParser = require('body-parser');
import dotenv = require('dotenv');
import cors = require('cors');
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, type, message } = req.body;

    const data = {
        personalizations: [
            {
                to: [
                    {
                        email: 'comercial@tcodesolucoes.com' // e-mail do destinatário
                    },
                ],
                subject: type
            }
        ],
        from: {
            email: 'comercial@tcodesolucoes.com',
            name: 'T-Code'
        },
        content: [
            {
                type: 'text/plain',
                value: `
                    Nome: ${name}
                    E-mail: ${email}
                    Telefone: ${phone}
                    Tipo: ${type}
                    Mensagem: ${message}
                `
            },
            {
                type: "text/html",
                value: `
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <p><strong>Telefone:</strong> ${phone}</p>
                    <p><strong>Tipo:</strong> ${type}</p>
                    <p><strong>Mensagem:</strong> ${message}</p>
                `
            }
        ]
    };

    try {
        const response = await axios.post('https://api.sendgrid.com/v3/mail/send', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
            }
        });

        if (response.status === 200) {
            res.status(200).json({ success: true });
        } else {
            res.status(response.status).json({ success: false, message: 'Erro ao enviar e-mail' });
        }
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ success: false, message: 'Erro ao enviar e-mail' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});