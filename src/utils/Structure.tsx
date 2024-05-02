import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Cookies from '@/components/layout/Cookies';
import router from '@/routes/router';
import Whatsapp from '@/components/ui/whatsapp';

function Structure() {
    return (
        <>
            <Header/>
            <main className="w-full h-fit bg-gray-100">
                {router()}
            </main>
            <Footer/>
            <Cookies/>
            <Whatsapp/>
        </>
    )
}

export default Structure;