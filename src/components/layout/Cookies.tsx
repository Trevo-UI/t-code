import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cookies() {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (cookiesAccepted === 'true') {
            setCookiesAccepted(true);
        }
    }, []);

    const handleAccept = () => {
        setCookiesAccepted(true);
        localStorage.setItem('cookiesAccepted', 'true');
    }

    return (
        <>
            {!cookiesAccepted && (
                <div role="alert" className="fixed bottom-0 left-0 md:bottom-5 md:left-5 z-50 rounded-xl border border-gray-100 bg-white p-4 max-w-xl show">
                    <div className="flex items-start gap-4">
                        <span className="text-green-600">
                            <svg width="24" height="24" viewBox="0 -0.5 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path
                                    fill="#000" fill-rule="evenodd"
                                    d="M6.85 4.787C8.731 3.44 10.958 3 12.456 3h1.005a1 1 0 0 1 1 1v3h2.014a1 1 0 0 1 1 1v2h3.019a1 1 0 0 1 1 1v1c0 3.503-1.395 5.808-3.297 7.206-1.85 1.36-4.087 1.794-5.74 1.794s-3.89-.434-5.742-1.794C4.814 17.808 3.419 15.503 3.419 12c0-3.528 1.5-5.828 3.431-7.213M9.442 7a1 1 0 1 0 0 2h.001a1 1 0 0 0 0-2zm-3.01 5a1 1 0 0 1 1-1h.002a1 1 0 1 1 0 2h-.001a1 1 0 0 1-1-1zm6.024 0a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2zm-3.01 4a1 1 0 0 1 1-1h.002a1 1 0 1 1 0 2h-.001a1 1 0 0 1-1-1zm7.029-2a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        <div className="flex-1">
                            <strong className="block font-medium text-gray-900">
                                Política de Privacidade
                            </strong>
                            <p className="mt-1 text-sm text-gray-700">
                                Protegendo sua privacidade! Utilizamos cookies para personalizar sua experiência. Ao continuar, você aceita nossa política de privacidade.
                            </p>
                            <div className="mt-4 flex gap-2">
                                <button className="block rounded-lg px-4 py-2 text-gray-700 transition bg-gray-100 hover:bg-gray-200" onClick={handleAccept} aria-label="Confirmar">
                                    <span className="text-sm">Confirmar</span>
                                </button>
                                <Link to="/politica-de-privacidade" title="Saiba mais sobre política e privacidade" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                                    <span className="text-sm">
                                        Veja mais
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <button className="text-gray-500 transition hover:text-gray-600" onClick={handleAccept} aria-label="Fechar Cookies">
                            <span className="sr-only">Fechar popup</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cookies;