export interface Projeto {
    id: number;
    name: string;
    description: string;
    images: string[];
}

export const projetos: Projeto[] = [
    {
        id: 1,
        name: 'LogPago',
        description: `Projeto desenvolvido para disponibilizar antecipações de recebíveis para fornecedores de serviços de transporte, com stack e práticas atuais para segurança e performance.

A plataforma integra com a API de WhatsApp para comunicação com os usuários, com atualização de status da negociação e comunicação quase instantânea com o fornecedor.`,
        images: [
            '/projects/logpago/initial.png',
            '/projects/logpago/dashboard.png',
            '/projects/logpago/negotiations.png',
        ],
    },
];
