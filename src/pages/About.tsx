import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '@/config/site';

function About() {
    return (
        <section className="w-full">
            <div
                className="mx-auto w-full max-w-screen-2xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-10 lg:pb-28"
            >
                <div className="flex w-full flex-col text-left">
                    <header className="w-full">
                        <h1 className="text-page-title animate__fadeInDown duration-1000">
                            <span className="block">Quem somos</span>
                            <span className="text-page-subtitle mt-3 block sm:mt-4">
                                Da ideia à operação contínua
                            </span>
                        </h1>
                    </header>

                    <p
                        className="text-page-block mt-10 w-full max-w-none animate__fadeIn duration-1000 sm:mt-12"
                    >
                        A T-Code cobre o ciclo completo de uma empresa de software: entender o problema, construir a
                        solução certa e mantê-la evoluindo em produção. Priorizamos entregas de complexidade real
                        (integrações, produtos com tráfego, operação contínua) e orientação para quem precisa colocar e
                        manter software no ar com segurança, não só “código pronto” sem critério de qualidade. As
                        frentes de atuação estão na página de{' '}
                        <Link to="/servicos" className="text-page-link">
                            Serviços
                        </Link>
                        ; abaixo, quatro ângulos complementares de como trabalhamos.
                    </p>

                    <div
                        className="mt-14 grid w-full grid-cols-1 gap-14 sm:mt-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 lg:mt-20 animate__fadeIn duration-1000"
                    >
                        <div className="flex w-full min-w-0 flex-col border-l-4 border-blue-700 pl-4 sm:pl-5">
                            <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                                Desenvolvimento de Sistemas Sob Medida
                            </h2>
                            <p className="text-page-block mt-4 w-full sm:mt-5">
                                Concepção e implementação de sistemas alinhados às regras do seu domínio, seja em APIs,
                                produtos SaaS, aplicações web e sites dinâmicos, do requisito ao código em uso no dia a
                                dia.
                            </p>
                        </div>
                        <div className="flex w-full min-w-0 flex-col border-l-4 border-blue-700 pl-4 sm:pl-5">
                            <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                                Integrações e Automação de Processos
                            </h2>
                            <p className="text-page-block mt-4 w-full sm:mt-5">
                                Conexão entre plataformas, consumo e exposição de APIs, integração com ERPs e ferramentas
                                de terceiros, e automação de fluxos para reduzir retrabalho e erro manual.
                            </p>
                        </div>
                        <div className="flex w-full min-w-0 flex-col border-l-4 border-blue-700 pl-4 sm:pl-5">
                            <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                                Arquitetura e Escalabilidade
                            </h2>
                            <p className="text-page-block mt-4 w-full sm:mt-5">
                                Decisões técnicas e estrutura do sistema pensadas para crescer com segurança:
                                organização em camadas, boas práticas, performance e base sustentável para novas
                                funcionalidades.
                            </p>
                        </div>
                        <div className="flex w-full min-w-0 flex-col border-l-4 border-blue-700 pl-4 sm:pl-5">
                            <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                                Infraestrutura e Deploy
                            </h2>
                            <p className="text-page-block mt-4 w-full sm:mt-5">
                                Ambientes de homologação e produção, pipelines de entrega, deploy em nuvem ou híbrido e
                                práticas que colocam o software no ar com previsibilidade, observabilidade e manutenção
                                contínua.
                            </p>
                        </div>
                    </div>

                    <p
                        className="text-page-block mt-16 w-full max-w-none sm:mt-20 animate__fadeIn duration-1000"
                    >
                        Em cada projeto atuamos em parceria com o cliente, do diagnóstico à operação, para que a solução
                        continue estável, segura e pronta para evoluir junto com o negócio.
                    </p>

                    <div className="mt-14 flex w-full flex-col gap-4 sm:mt-16 sm:flex-row sm:flex-wrap sm:gap-4 animate__fadeIn duration-1000">
                        <Link
                            to="/servicos"
                            title="Ver serviços"
                            className="inline-flex w-full justify-center rounded bg-blue-700 px-10 py-3.5 text-center text-sm font-medium text-white shadow transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto sm:justify-center"
                        >
                            Serviços
                        </Link>
                        <Link
                            to="/projetos"
                            title="Ver projetos desenvolvidos"
                            className="inline-flex w-full justify-center rounded bg-blue-700 px-10 py-3.5 text-center text-sm font-medium text-white shadow transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto sm:justify-center"
                        >
                            Projetos
                        </Link>
                        <a
                            href={WHATSAPP_URL}
                            title="Chamar no WhatsApp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full justify-center rounded bg-blue-700 px-10 py-3.5 text-center text-sm font-medium text-white shadow transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto sm:justify-center"
                        >
                            Contato
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
