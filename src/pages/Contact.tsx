import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            type,
            message
        };

        try {
            const response = await fetch(import.meta.env.VITE_SERVER_URL +  '/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('E-mail enviado com sucesso!');
            } else {
                alert('Erro ao enviar e-mail');
            }
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            alert('Erro ao enviar e-mail');
        }
    };

    return (
        <section className="bg-gray-100 h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <h3 className="text-3xl font-bold text-gray-900">
                            Entre em Contato
                        </h3>
                        <p className="max-w-xl text-lg text-gray-500 mt-2">
                            Estamos aqui para ouvir você! Se você tiver alguma dúvida, sugestão, ou apenas quiser dizer
                            "oi", sinta-se à vontade para entrar em contato conosco. Nossa equipe está pronta para
                            ajudar da melhor maneira possível. Preencha o formulário e entraremos em contato o mais rápido possível.
                            Se preferir, você pode nos enviar uma mensagem diretamente pelo WhatsApp.
                        </p>
                        <div className="mt-8">
                            <b>Horário de Atendimento:</b> Segunda a Sexta, das 9h às 18h. <br/>
                            <address className="not-italic"><b>Endereço:</b> Rio do Sul, SC - 89160-000.</address>
                            <b>Telefone:</b> <a className="hover:underline" href="tel:47984985607" title="telefone">(47) 98498-5607</a><br/>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Nome</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    placeholder="Nome"
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        placeholder="Telefone"
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                                <div>
                                    <label htmlFor="Option1" className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white">
                                        <input
                                            className="sr-only"
                                            id="Option1"
                                            type="radio"
                                            name="option"
                                            value="Orçamento"
                                            checked={type === "Orçamento"}
                                            onChange={(e) => setType(e.target.value)}
                                        />
                                        <span className="text-sm"> Orçamento </span>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="Option2" className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white">
                                        <input
                                            className="sr-only"
                                            id="Option2"
                                            type="radio"
                                            name="option"
                                            value="Dúvidas"
                                            checked={type === "Dúvidas"}
                                            onChange={(e) => setType(e.target.value)}
                                        />
                                        <span className="text-sm"> Dúvidas </span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    placeholder={
                                        type === 'Orçamento'
                                            ? 'Por favor, forneça o máximo de detalhes possível sobre suas necessidades. Quanto mais informações você puder compartilhar, melhor poderemos entender e atender às suas demandas.'
                                            : 'Tem alguma dúvida? Estamos aqui para ajudar! Por favor, compartilhe conosco quaisquer perguntas ou preocupações que você possa ter. Quanto mais detalhes você fornecer, melhor poderemos entender sua situação e oferecer a orientação necessária.'
                                    }
                                    id="message"
                                    value={message}
                                    onChange={(e)=> setMessage(e.target.value)}
                                    rows={5}
                                />
                            </div>
                            <div className="mt-4">
                                <button type="submit" aria-label="Enviar" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;