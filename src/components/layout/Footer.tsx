import { useEffect, useState } from "react";
import Logo from '@/components/ui/logo';
import List from '@/components/ui/list';
import Contact from '@/components/ui/contact';
import { services, institutional } from '@/data/footer';

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
            <section className="flex h-fit w-full bg-blue-700 py-5">
                <div className="flex justify-between flex-col w-[92%] md:w-4/5 mx-auto my-0 md:flex-row md:gap-2">
                    <div className="flex flex-col gap-6 w-full md:w-1/4">
                        <h3 className="mx-auto my-0 md:mx-0">
                            <Logo width={isMobile ? 56 : 96} height={isMobile ? 56 : 96}/>
                        </h3>
                        <p className="text-md text-center md:text-left">
                            Criamos a solução que a sua empresa necessita.
                            Entre em contato e faça um orçamento.
                        </p>
                    </div>
                    <div className="flex flex-col md:justify-end md:gap-20 mt-8 w-full md:flex-row md:mr-20 md:mt-0">
                        <div className="flex flex-col gap-2 ">
                            <List title="Institucional" itemsList={institutional}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <List title="Serviços" itemsList={services}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/4">
                        <Contact/>
                    </div>
                </div>
            </section>
            <section className="flex justify-center text-center bg-blue-900">
                <p className="py-2 text-sm w-4/5">
                    © 2024 T-Code Soluções Tecnológicas LTDA - 51.946.998/0001-52. Todos os direitos reservados.
                </p>
            </section>
        </footer>
    );
}

export default Footer;