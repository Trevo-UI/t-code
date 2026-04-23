import { WHATSAPP_URL } from '@/config/site';

/**
 * Página de contato indexável (SEO). Atendimento principal exclusivamente via WhatsApp.
 */
function Contact() {
    return (
        <section className="w-full min-h-screen bg-gray-100">
            <div className="mx-auto w-full max-w-screen-2xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-10 lg:pb-28">
                <header className="w-full">
                    <h1 className="text-page-title">Contato</h1>
                    <p className="text-page-subtitle mt-3 w-full sm:mt-4">Fale com a T-Code pelo WhatsApp</p>
                </header>

                <div className="mt-10 w-full space-y-6 sm:mt-12 sm:space-y-8">
                    <p className="text-page-block w-full max-w-none">
                        O canal principal de atendimento é o <strong>WhatsApp</strong>. Por ele conversamos sobre
                        orçamento, <strong>consultoria técnica</strong>, sustentação de <strong>sistemas e sites em
                        produção</strong>, revisão de código, deploy, monitoramento e manutenção contínua.
                    </p>
                    <p className="text-page-block w-full max-w-none">
                        Muitas empresas e pessoas acabam com software feito com apoio de IA ou tutoriais, sem
                        certeza de se a arquitetura, a segurança e a performance estão corretas, e sem um caminho
                        claro para <strong>colocar no ar e manter em produção</strong>. A T-Code atua nesse ponto:
                        ajudamos a <strong>validar, organizar, implantar e operar</strong> a solução de forma
                        profissional.
                    </p>
                </div>

                <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:mt-14 sm:p-8">
                    <p className="text-page-muted text-xs font-semibold uppercase tracking-wide">Horário</p>
                    <p className="mt-1.5 text-sm text-gray-800 sm:text-base">Segunda a sexta, 9h às 18h (horário de Brasília)</p>
                    <address className="not-italic mt-5 text-sm text-gray-800 sm:text-base">
                        <p className="text-page-muted text-xs font-semibold uppercase tracking-wide">Local</p>
                        <p className="mt-1.5">Rio do Sul, SC, 89160-000</p>
                    </address>
                </div>

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 flex w-full max-w-md items-center justify-center rounded-lg bg-blue-700 px-6 py-3.5 text-center text-sm font-medium text-white shadow transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:mt-14"
                >
                    Iniciar conversa no WhatsApp
                </a>
                <p className="text-page-muted mt-5 max-w-2xl text-justify sm:mt-6">
                    Dúvidas e orçamentos: priorizamos a resposta pelo WhatsApp. Email comercial, quando necessário, pode
                    ser combinado após o primeiro contato.
                </p>
            </div>
        </section>
    );
}

export default Contact;
