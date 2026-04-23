/** Base URL pública (SEO, JSON-LD, sitemap) */
export const SITE_BASE = "https://www.tcodesolucoes.com";

const WHATSAPP_E164 = "5547991120742";

const defaultMessage =
    "Olá, gostaria de falar com a T-Code sobre solução em software, operação em produção ou manutenção.";

export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_E164}&text=${encodeURIComponent(defaultMessage)}`;
