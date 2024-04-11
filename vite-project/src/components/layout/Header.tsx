import {useEffect, useState} from 'react';
import Logo from '@/components/ui/logo';
import Menu from '@/components/layout/Menu';
import MenuMobile from '@/components/layout/MenuMobile';

function Header() {
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
        <header className="w-full h-20 bg-blue-800 sticky top-0 z-50 shadow-lg md:h-24">
            <div className="flex items-center justify-between h-full p-4 md:w-4/5 md:p-0 md:mx-auto md:my-0">
                <h1>
                    <Logo width={isMobile ? 48 : 64} height={isMobile ? 48 : 64}/>
                </h1>
                { isMobile
                    ? <MenuMobile/>
                    : <Menu/>
                }
            </div>
        </header>
    )
}

export default Header;