import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Globe, Layers, Link2, Puzzle, ServerCog } from 'lucide-react';
import { services } from '@/data/services';
import type { LucideIcon } from 'lucide-react';

const iconById: Record<string, LucideIcon> = {
    projetos: Layers,
    producao: ServerCog,
    customizacao: Puzzle,
    integracoes: Link2,
    consultoria: BookOpen,
    site: Globe,
};

function LandingServicesGrid() {
    return (
        <section className="w-full border-b border-gray-200/80 bg-gradient-to-b from-slate-50/80 to-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10">
                <div className="mb-10 max-w-2xl sm:mb-12">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">O que fazemos</h2>
                    <p className="mt-3 text-base text-gray-600 sm:text-lg">
                        Pilares alinhados ao que descrevemos em{' '}
                        <Link to="/servicos" className="text-page-link">
                            serviços
                        </Link>
                        : do projeto às integrações e à manutenção no ar.
                    </p>
                </div>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                    {services.map((s) => {
                        const Icon = iconById[s.id] ?? Layers;
                        return (
                            <li key={s.id} className="min-w-0">
                                <Link
                                    to={`/servicos#${s.id}`}
                                    className="group flex h-full flex-col rounded-2xl border border-gray-200/90 bg-white p-5 shadow-sm transition hover:border-blue-500/40 hover:shadow-md sm:p-6"
                                >
                                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100/80 transition group-hover:bg-blue-100/80">
                                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800">
                                        {s.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                                        {s.subtitle}
                                    </p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:gap-2">
                                        Ver detalhes
                                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default LandingServicesGrid;
