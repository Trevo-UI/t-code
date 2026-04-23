import { Link } from 'react-router-dom';
import { ArrowUpRight, Images } from 'lucide-react';
import { projetos } from '@/data/projetos';

function ProjectsTeaser() {
    const count = projetos.length;
    const featured = projetos[0];
    const cover = featured?.images?.[0];

    return (
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <div className="mb-8 flex flex-col gap-2 sm:mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Projetos</h2>
                <p className="max-w-2xl text-base text-gray-600 sm:text-lg">
                    Trabalhos reais, com descrição e imagens. Sem portfólio de logo: o que mostramos é o que entregamos.
                </p>
            </div>

            {count > 0 && featured && (
                <div className="mb-10 grid gap-8 overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm sm:mb-12 lg:grid-cols-2 lg:items-stretch">
                    <div className="relative aspect-[16/10] min-h-[12rem] bg-slate-100 sm:min-h-0">
                        {cover ? (
                            <img
                                src={cover}
                                alt=""
                                className="h-full w-full object-cover"
                                width={800}
                                height={500}
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-slate-400">
                                <Images className="h-12 w-12" strokeWidth={1} aria-hidden />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-800">Em destaque</p>
                        <h3 className="mt-2 text-xl font-semibold text-gray-900 sm:text-2xl">{featured.name}</h3>
                        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                            {featured.description.replace(/\n+/g, ' ').trim().slice(0, 220)}
                            {featured.description.length > 220 ? '…' : ''}
                        </p>
                        <Link
                            to={`/projetos#projeto-${featured.id}`}
                            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-800 transition hover:gap-2.5"
                        >
                            Abrir o projeto
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </Link>
                    </div>
                </div>
            )}

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                {count > 0 && (
                    <p className="text-sm text-gray-500">
                        {count} {count === 1 ? 'trabalho documentado' : 'trabalhos documentados'}
                    </p>
                )}
                <Link
                    to="/projetos"
                    title="Ver todos os projetos"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                    {count > 0 ? 'Ver todos' : 'Ver a página de projetos'}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
            </div>
        </div>
    );
}

export default ProjectsTeaser;
