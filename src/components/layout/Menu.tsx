import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

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
            <ul className="flex items-center space-x-4">
                <li>
                    <Link to="/" className="text-white text-lg ease-in duration-200 underline-offset-8 hover:underline">
                        Início
                    </Link>
                </li>
                <li>
                    <Link to="/sobre-a-empresa" className="text-white text-lg ease-in duration-200 underline-offset-8 hover:underline">
                        Empresa
                    </Link>
                </li>
                <li>
                    <Link to="/servicos" className="text-white text-lg ease-in duration-200 underline-offset-8 hover:underline">
                        Serviços
                    </Link>
                </li>
                <li>
                    <Link to="/contato" className="text-white text-lg ease-in duration-200 underline-offset-8 hover:underline">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;