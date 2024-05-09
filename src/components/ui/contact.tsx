import getDevice from '@/functions/getDevice';
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.tsx";

function Contact() {
    const isMobile = getDevice();

    return (
        <>
            { !isMobile ? (
                <>
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
                        <a className="flex items-center justify-center rounded-full bg-white w-8 h-8 p-1 hover:opacity-80" href="https://api.whatsapp.com/send?phone=5547984985607&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20minha%20empresa" target="_blank">
                            <BsWhatsapp className="text-black w-5 h-5"/>
                        </a>
                    </div>
                </>
            ) : (
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item">
                        <AccordionTrigger>
                            <p className="text-lg">
                                Contato
                            </p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-1 mb-8 md:mb-0">
                                <a href="tel:47988339861">
                                    <b>Telefone:</b> (47) 98833-9861
                                </a>
                                <a href="mailto:comercial@tcodesolucoes.com">
                                    <b>E-mail:</b> comercial@tcodesolucoes.com
                                </a>
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
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
        </>
    )
}

export default Contact;