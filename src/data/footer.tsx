import { WHATSAPP_URL } from '@/config/site';
import { services as servicesCatalog } from '@/data/services';

/** Links do rodapé derivados do catálogo de serviços; “Projetos” aponta para a vitrine de trabalhos. */
export const footerServiceLinks = servicesCatalog.map((s) => ({
    description: s.title,
    link: s.id === 'projetos' ? '/projetos' : `/servicos#${s.id}`,
}));

export const institutional = [
    {
        description: 'Política de Privacidade',
        link: '/politica-de-privacidade',
    },
    {
        description: 'Sobre nós',
        link: '/sobre-a-empresa',
    },
    {
        description: 'Contato',
        link: WHATSAPP_URL,
    },
];
