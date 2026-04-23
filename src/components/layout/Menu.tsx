import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { WHATSAPP_URL } from '@/config/site';

interface MenuProps {
    setPage: (value: string) => void;
}

function Menu({ setPage }: MenuProps) {
    const location = useLocation();

    useEffect(() => {
        const handleNavLink = () => {
            const links = document.querySelectorAll("nav a");
            links.forEach(link => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if (link.href === window.location.href) {
                    link.classList.add("underline");
                } else {
                    link.classList.remove("underline");
                }
            });
        };

        handleNavLink();
        setPage(window.location.pathname);

        return () => {
            window.removeEventListener('popstate', handleNavLink);
        };
    }, [location.pathname]);

    return (
        <nav>
            <ul className="flex items-center gap-6 text-base font-medium text-white">
                <li>
                    <Link to="/" title="Voltar ao início" className="underline-offset-8 transition hover:underline">
                        Início
                    </Link>
                </li>
                <li>
                    <Link to="/sobre-a-empresa" title="Saiba mais sobre a empresa" className="underline-offset-8 transition hover:underline">
                        Empresa
                    </Link>
                </li>
                <li>
                    <Link to="/servicos" title="Veja nossos serviços" className="underline-offset-8 transition hover:underline">
                        Serviços
                    </Link>
                </li>
                <li>
                    <Link to="/projetos" title="Projetos desenvolvidos" className="underline-offset-8 transition hover:underline">
                        Projetos
                    </Link>
                </li>
                <li>
                    <a
                        title="Chamar no WhatsApp"
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-8 transition hover:underline"
                    >
                        Contato
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;