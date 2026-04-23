import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Cookies from '@/components/layout/Cookies';
import router from '@/routes/router';
import { getDocumentTitle } from '@/seo/documentTitle';

function Structure() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = getDocumentTitle(pathname);
    }, [pathname]);

    return (
        <>
            <Header/>
            <main className="w-full h-fit bg-gray-100">
                {router()}
            </main>
            <Footer/>
            <Cookies/>
        </>
    )
}

export default Structure;