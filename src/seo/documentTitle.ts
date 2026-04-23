const BASE = "T-Code Soluções";

export const defaultDocumentTitle = `${BASE} | Software sob medida, consultoria e operação em produção`;

const titles: Record<string, string> = {
    "/": defaultDocumentTitle,
    "/sobre-a-empresa": `Quem somos | ${BASE}`,
    "/servicos": `Serviços | ${BASE}`,
    "/projetos": `Projetos desenvolvidos | ${BASE}`,
    "/contato": `Contato | ${BASE}`,
    "/politica-de-privacidade": `Política de privacidade | ${BASE}`,
};

export function getDocumentTitle(pathname: string): string {
    if (titles[pathname]) {
        return titles[pathname]!;
    }
    return defaultDocumentTitle;
}
