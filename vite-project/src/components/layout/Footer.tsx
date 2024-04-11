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
        <footer className="w-full h-fit mt-32 text-white">
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
                            <a className="flex items-center justify-center rounded-full bg-white w-8 h-8 p-1 hover:opacity-80" href="https://www.instagram.com/tcodesolucoes/" target="_blank">
                                <BsInstagram className="text-black w-5 h-5"/>
                            </a>
                            <a className="flex items-center justify-center rounded-full bg-white w-8 h-8 p-1 hover:opacity-80" href="https://br.linkedin.com/company/t-code-solucoes-tecnologicas" target="_blank">
                                <FaLinkedinIn className="text-black w-5 h-5"/>
                            </a>
                            <a className="flex items-center justify-center rounded-full bg-white w-8 h-8 p-1 hover:opacity-80" href="https://api.whatsapp.com/send?phone=5547988339861&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20minha%20empresa" target="_blank">
                                <BsWhatsapp className="text-black w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center bg-blue-900">
                <p className="py-2 text-sm">
                    © 2024 T-Code Soluções Tecnológicas. Todos os direitos reservados.
                </p>
            </section>
        </footer>
    );
}

export default Footer;