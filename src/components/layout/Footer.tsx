import Logo from '@/components/ui/logo';
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import {useEffect, useState} from "react";


function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer className="w-full h-fit mt-1 text-white">
            <section className="flex justify-center bg-gray-900 p-6">
                <div className="flex flex-col items-center justify-between w-4/5 gap-8 md:flex-row">
                    <div className="text-center w-full md:w-2/3">
                        <h4 className="text-lg font-bold md:text-2xl">
                            Digite seu e-mail para receber uma proposta de serviço
                        </h4>
                        <p className="hidden text-gray-300 text-md sm:mt-4 sm:block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
                            repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
                            tempora nisi?
                        </p>
                    </div>
                    <div className="mt-8 w-full md:w-1/3">
                        <form action="#" className="sm:flex sm:gap-4">
                            <div className="sm:flex-1">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    placeholder="Digite seu E-mail"
                                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-800"
                                />
                            </div>
                            <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                            >
                                <span className="text-sm font-medium"> Registrar </span>
                                <svg
                                    className="size-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="flex items-center h-fit w-full bg-blue-800 py-5 md:h-48">
                <div className="flex justify-between items-center flex-col w-4/5 mx-auto my-0 md:flex-row">
                    <div className="flex flex-col gap-6 text-sm w-full md:w-1/4">
                        <h3 className="mx-auto my-0 md:mx-0">
                            <Logo width={isMobile ? 56 : 96} height={isMobile ? 56 : 96}/>
                        </h3>
                        <p className="text-center md:text-left">
                            Criamos a solução que a sua empresa necessita.
                            Entre em contato e faça um orçamento.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full mt-8 md:w-1/4">
                        <h3 className="text-xl uppercase font-bold mb-2 md:mb-0">Contato</h3>
                        <div className="flex flex-col gap-1 mb-8 md:mb-0">
                            <span>
                                <p>Telefone: (47) 98833-9861</p>
                            </span>
                            <span>
                                <p>E-mail: comercial@tcodesolucoes.com</p>
                            </span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <a className="flex items-center justify-center rounded-full bg-white w-8 h-8 p-1 hover:opacity-80"
                               href="https://www.instagram.com/tcodesolucoes/" target="_blank">
                                <BsInstagram className="text-black w-5 h-5"/>
                            </a>
                            <a className="flex items-center justify-center rounded-full bg-white w-8 h-8 p-1 hover:opacity-80"
                               href="https://br.linkedin.com/company/t-code-solucoes-tecnologicas" target="_blank">
                                <FaLinkedinIn className="text-black w-5 h-5"/>
                            </a>
                            <a className="flex items-center justify-center rounded-full bg-white w-8 h-8 p-1 hover:opacity-80"
                               href="https://api.whatsapp.com/send?phone=5547984985607&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20minha%20empresa"
                               target="_blank">
                                <BsWhatsapp className="text-black w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center text-center bg-blue-900">
                <p className="py-2 text-sm w-4/5">
                    © 2024 T-Code Soluções Tecnológicas. Todos os direitos reservados.
                </p>
            </section>
        </footer>
    );
}

export default Footer;