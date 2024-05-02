import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/logo';
import Menu from '@/components/layout/Menu';
import MenuMobile from '@/components/layout/MenuMobile';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [page, setPage] = useState(window.location.pathname);

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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isTop = currentScrollPos < 100;

            setIsScrolled(!isTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`w-full h-20 ease-in duration-200 fixed ${isScrolled && !isMobile && page === '/' ? 'bg-blue-700 md:h-20' : page === '/' && !isMobile ? 'bg-transparent' : 'bg-blue-700 sticky' } top-0 z-50 shadow-lg md:h-24`}>
            <div className="flex items-center justify-between h-full p-4 md:w-4/5 md:p-0 md:mx-auto md:my-0">
                <Link to="/" draggable={false}>
                    <h1>
                        <Logo width={isMobile ? 48 : 64} height={isMobile ? 48 : 64}/>
                    </h1>
                </Link>
                { isMobile
                    ? <MenuMobile/>
                    : <Menu setPage={setPage}/>
                }
            </div>
        </header>
    )
}

export default Header;