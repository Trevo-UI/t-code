import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import About from '@/pages/About';
import Services from '@/pages/Services';
import NotFound from '@/pages/404';
import Contact from '@/pages/Contact';

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="*" element={<NotFound/>}/>
            <Route path="/sobre-a-empresa" element={<About/>}/>
            <Route path="/servicos" element={<Services/>}/>
            <Route path="/contato" element={<Contact/>}/>
        </Routes>
    )
}

export default router;