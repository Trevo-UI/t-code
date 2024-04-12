import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import About from '@/pages/About';
import NotFound from '@/pages/404';

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="*" element={<NotFound/>}/>
            <Route path="/sobre-a-empresa" element={<About/>}/>
        </Routes>
    )
}

export default router;