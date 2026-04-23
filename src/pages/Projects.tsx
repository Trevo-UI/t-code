import { WHATSAPP_URL } from '@/config/site';
import { projetos } from '@/data/projetos';
import ProjectImageCarousel from '@/pages/components/projects/ProjectImageCarousel';

function Projects() {
    return (
        <section className="w-full bg-gray-100">
            <div className="mx-auto w-full max-w-screen-2xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-10 lg:pb-28">
                <header className="w-full">
                    <h1 className="text-page-title">
                        <span className="block">Projetos</span>
                        <span className="text-page-subtitle mt-3 block w-full font-normal sm:mt-4">
                            Trabalhos em que a T-Code atuou com foco em entregar soluções de valor: contexto, stack e
                            entregas alinhados ao que o cliente precisou no mundo real.
                        </span>
                    </h1>
                </header>

                <div className="mt-12 w-full space-y-20 sm:mt-16 sm:space-y-24">
                    {projetos.map((projeto) => {
                        const hasImages = projeto.images.length > 0;

                        return (
                            <article
                                key={projeto.id}
                                id={`projeto-${projeto.id}`}
                                className="scroll-mt-28 border-b border-gray-200 pb-20 last:mb-0 last:border-0 last:pb-0 sm:scroll-mt-32"
                            >
                                <div className="w-full">
                                    <div
                                        className={
                                            hasImages
                                                ? 'grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14'
                                                : 'w-full'
                                        }
                                    >
                                        {hasImages && (
                                            <div className="order-1 min-w-0 lg:max-w-none lg:self-start">
                                                <ProjectImageCarousel
                                                    images={projeto.images}
                                                    projectName={projeto.name}
                                                />
                                            </div>
                                        )}

                                        <div
                                            className={
                                                hasImages
                                                    ? 'order-2 flex min-w-0 flex-col lg:pl-0'
                                                    : 'flex w-full flex-col'
                                            }
                                        >
                                            <h2 className="text-page-h2">{projeto.name}</h2>
                                            <div
                                                className="text-page-block mt-5 w-full max-w-none whitespace-pre-wrap sm:mt-6"
                                            >
                                                {projeto.description.trim()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-16 w-full border-t border-gray-200 pt-12 sm:mt-20 sm:pt-14">
                    <p className="text-center text-base leading-relaxed text-gray-600 sm:text-lg">
                        Quer algo parecido para o seu negócio? Chame a T-Code no{' '}
                        <a
                            href={WHATSAPP_URL}
                            className="text-page-link font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
