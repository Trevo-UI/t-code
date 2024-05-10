import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import About from '@/pages/About';
import Services from '@/pages/Services';
import NotFound from '@/pages/404';
import Contact from '@/pages/Contact';
import PolicyAndPrivacy from '@/pages/PolicyAndPrivacy';

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="*" element={<NotFound/>}/>
            <Route path="/sobre-a-empresa" element={<About/>}/>
            <Route path="/servicos" element={<Services/>}/>
            <Route path="/contato" element={<Contact/>}/>
            <Route path="/politica-de-privacidade" element={<PolicyAndPrivacy/>}/>
        </Routes>
    )
}

export default router;