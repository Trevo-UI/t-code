import LandingHero from '@/pages/components/landing-page/LandingHero';
import LandingServicesGrid from '@/pages/components/landing-page/LandingServicesGrid';
import PlatformBenefits from '@/pages/components/landing-page/platformBenefits';
import ProjectsTeaser from '@/pages/components/landing-page/projectsTeaser';
import AnimatedVisibility from '@/functions/animatedVisibility.tsx';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '@/config/site';

function LandingPage() {
    return (
        <div className="w-full">
            <LandingHero />

            <LandingServicesGrid />

            <section className="bg-slate-900 text-white" aria-label="Dúvidas frequentes">
                <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                    <PlatformBenefits />
                </AnimatedVisibility>
            </section>

            <section className="border-t border-gray-200/80 bg-gray-50/90">
                <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                    <ProjectsTeaser />
                </AnimatedVisibility>
            </section>

            <section
                className="border-t border-gray-200/80 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
                aria-label="Contato"
            >
                <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6 sm:py-12 lg:px-10">
                    <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                        Precisa alinhar escopo, revisar o que está em produção ou montar a próxima entrega? Na T-Code,
                        priorizamos o atendimento pelo{' '}
                        <span className="whitespace-nowrap">WhatsApp</span>.
                    </p>
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
                        >
                            <MessageCircle className="h-4 w-4" aria-hidden />
                            WhatsApp
                        </a>
                        <Link
                            to="/sobre-a-empresa"
                            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5 sm:w-auto"
                        >
                            Conhecer a empresa
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
