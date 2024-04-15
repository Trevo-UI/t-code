import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Cookies from '@/components/layout/Cookies';
import router from '@/routes/router';

function Structure() {
    return (
        <>
            <Header/>
            <main className="w-full h-fit">
                {router()}
            </main>
            <Footer/>
            <Cookies/>
        </>
    )
}

export default Structure;