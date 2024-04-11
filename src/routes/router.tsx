import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage.tsx";
import NotFound from "@/pages/404.tsx";

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default router;