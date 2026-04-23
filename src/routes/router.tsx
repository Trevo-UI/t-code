import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import About from '@/pages/About';
import Services from '@/pages/Services';
import NotFound from '@/pages/404';
import Contact from '@/pages/Contact';
import PolicyAndPrivacy from '@/pages/PolicyAndPrivacy';
import Projects from '@/pages/Projects';

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/sobre-a-empresa" element={<About/>}/>
            <Route path="/servicos" element={<Services/>}/>
            <Route path="/projetos" element={<Projects/>}/>
            <Route path="/contato" element={<Contact/>}/>
            <Route path="/politica-de-privacidade" element={<PolicyAndPrivacy/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default router;