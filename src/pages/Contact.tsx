import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        option: "",
        message: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await axios.post('/api/send-email', formData);
            alert('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }
    };


    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <h3 className="text-3xl font-bold text-gray-900">
                            Contato
                        </h3>
                        <p className="max-w-xl text-lg text-gray-700">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className="mt-8">
                            <a href="https://api.whatsapp.com/send?phone=5547984985607&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20minha%20empresa" className="text-2xl font-bold text-blue-800 flex items-center gap-2 hover:underline w-fit">
                                <BsWhatsapp className="text-md"/>
                                (47) 98498-5607
                            </a>
                            <address className="mt-2 not-italic">Rio do Sul, SC - 89160-000</address>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Nome</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Nome"
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email" type="email" id="email"/>
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Telefone"
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                <div>
                                    <label htmlFor="Option1" className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white">
                                        <input
                                            className="sr-only"
                                            id="Option1"
                                            type="radio"
                                            name="option"
                                            value="Orçamento"
                                            checked={formData.option === "Orçamento"}
                                            onChange={handleChange}
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
                                            checked={formData.option === "Dúvidas"}
                                            onChange={handleChange}
                                        />
                                        <span className="text-sm"> Dúvidas </span>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="Option3" className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white">
                                        <input
                                            className="sr-only"
                                            id="Option3"
                                            type="radio"
                                            name="option"
                                            value="Suporte"
                                            checked={formData.option === "Suporte"}
                                            onChange={handleChange}
                                        />
                                        <span className="text-sm">Suporte</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Mensagem"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-4">
                                <button type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
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