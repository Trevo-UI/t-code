import { MessageCircle, Wallet, Wrench } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/site';

const items = [
    {
        icon: Wrench,
        title: 'Negócio em qualquer etapa',
        text: 'Sistemas personalizados para o tamanho e a maturidade da sua operação: do MVP ao crescimento com integrações e automação.',
    },
    {
        icon: Wallet,
        title: 'Orçamento sem surpresa',
        text: 'Definimos escopo, prazo e forma de acompanhamento com transparência. O primeiro contato para orçamento ou alinhamento não cria compromisso.',
    },
    {
        icon: MessageCircle,
        title: 'Código, deploy e manutenção',
        text: 'Fazer o software é um passo; manter no ar com segurança, desempenho e suporte contínuo é outro. Ajudamos a fechar o ciclo após a publicação.',
    },
] as const;

function PlatformBenefits() {
    return (
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="mb-10 sm:mb-12">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Perguntas comuns</h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-300/95 sm:text-base">
                    O que a gente mais escuta em conversa com clientes (e como costumamos ajudar).
                </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {items.map(({ icon: Icon, title, text }) => (
                    <li key={title}>
                        <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-sm backdrop-blur-sm sm:p-6">
                            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                            </span>
                            <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-200/90 sm:text-[0.95rem]">
                                {text}
                            </p>
                        </article>
                    </li>
                ))}
            </ul>
            <p className="mt-8 text-center sm:mt-10">
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/95 underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Tirar dúvidas no WhatsApp
                </a>
            </p>
        </div>
    );
}

export default PlatformBenefits;
