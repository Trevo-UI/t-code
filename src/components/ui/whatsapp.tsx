import { Link } from 'react-router-dom';
import { BsWhatsapp } from "react-icons/bs";

function Whatsapp() {
    return (
        <>
            <div className="animate-ping fixed bottom-4 right-4 md:bottom-8 md:right-10 w-14 h-14 bg-gradient-to-r from-green-300 to-green-600 rounded-full z-40"/>
            <div className="flex justify-center items-center fixed bottom-3 right-3 md:bottom-7 md:right-9 w-16 h-16 bg-green-600 rounded-full z-40">
                <Link
                    to="https://api.whatsapp.com/send?phone=5547984985607&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20minha%20empresa"
                    target="_blank"
                    className="flex justify-center items-center w-full h-full"
                >
                    <BsWhatsapp className="text-white w-9 h-9 "/>
                </Link>
            </div>
        </>
    )
}

export default Whatsapp;