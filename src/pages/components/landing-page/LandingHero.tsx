import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight, Layers } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/site';

function LandingHero() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0">
                <div
                    className="h-full w-full bg-slate-800 bg-[url('/banners/banner-landing-page-main.webp')] bg-cover bg-right md:bg-center"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-slate-950/88 via-slate-950/70 to-slate-950/92"
                    aria-hidden
                />
            </div>
            <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl flex-col items-start justify-center gap-6 px-4 py-20 sm:gap-8 sm:px-6 sm:py-24 md:min-h-[28rem] md:py-28 lg:min-h-[32rem] lg:px-10">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-200/90">T-Code Soluções</p>
                <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-tight md:text-5xl lg:max-w-4xl lg:text-6xl">
                    Software sob medida, com solidez em produção
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-200/95 sm:text-xl">
                    Da consultoria e do desenvolvimento à operação: deploy, manutenção e acompanhamento de sistemas e
                    sites no ar, com o alinhamento que a operação exige.
                </p>
                <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-950/30 transition hover:bg-slate-100 sm:w-auto"
                    >
                        <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                        Conversar no WhatsApp
                    </a>
                    <Link
                        to="/servicos"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:border-white/50 hover:bg-white/10 sm:w-auto"
                    >
                        <Layers className="h-4 w-4" aria-hidden />
                        Ver serviços
                    </Link>
                    <Link
                        to="/projetos"
                        className="inline-flex w-full items-center justify-center gap-1.5 text-sm font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline sm:w-auto"
                    >
                        Projetos
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default LandingHero;
