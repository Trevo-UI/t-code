# Site T-Code Soluções

Site institucional (React + Vite): páginas de serviços, projetos, contato e política de privacidade. API opcional em Express para envio de email (SendGrid).

## Stack principal e versões

Valores alinhados ao `package.json` do repositório (caret `^` permite patches/minor mais novos no `npm install`).

| Camada | Tecnologia | Versão no projeto |
|--------|------------|-------------------|
| Runtime | Node.js | **20.x ou superior** (recomendado; evita avisos com Vite 5 e sintaxe moderna) |
| UI | React | ^18.2.0 |
| UI | React DOM | ^18.2.0 |
| Roteamento | react-router-dom | ^6.22.3 |
| Build / dev | Vite | ^5.2.0 |
| Build / dev | @vitejs/plugin-react | ^4.2.1 |
| Linguagem | TypeScript | ^5.2.2 |
| Estilo | Tailwind CSS | ^3.4.3 |
| Estilo | tailwindcss-animate | ^1.0.7 |
| Estilo | PostCSS / Autoprefixer | ^8.4.38 / ^10.4.19 |
| Componentes | Radix UI (accordion, menubar, slot) | ^1.x |
| Ícones | lucide-react | ^0.367.0 |
| Ícones | react-icons | ^5.0.1 |
| Carrossel | embla-carousel-react (+ autoplay) | ^8.0.2 |
| Utilitários | clsx, tailwind-merge, class-variance-authority | ver `package.json` |
| API (opcional) | Express, axios, cors, dotenv | ver `package.json` |
| Email (opcional) | @sendgrid/mail | ^8.1.3 |
| Qualidade | ESLint + TypeScript ESLint | ^8.57.0 / ^7.2.0 |

## Como rodar no desenvolvimento

```bash
npm install
npm run dev
```

Abre o Vite em modo desenvolvimento (URL no terminal, em geral `http://localhost:5173`).

### API + front (opcional)

```bash
npm start
```

Sobe o front com `vite serve` e o servidor em `src/api/server.cjs` em paralelo. Exige variáveis de ambiente conforme o código da API (por exemplo `SENDGRID_API_KEY`, `CORS_ORIGIN`, `PORT`).

## Testes e checagens

Não há suíte de testes unitários (Vitest/Jest) neste repositório.

### Verificação rápida (tipos)

```bash
npm test
```

Executa **`tsc --noEmit`**: o TypeScript checa todos os tipos sem gerar arquivos na pasta de build. É o passo mínimo recomendado no desenvolvimento antes de abrir PR ou publicar.

### Build de produção (tipos + bundle)

```bash
npm run build
```

Roda **`tsc`** (checagem de tipos; `noEmit: true` no `tsconfig`) e em seguida **`vite build`**, como no deploy.

### ESLint

O `package.json` inclui `npm run lint`, mas **ainda não há arquivo de configuração do ESLint** na raiz do projeto (por exemplo `eslint.config.js` ou `.eslintrc.cjs`). Depois que essa config existir, inclua o lint no fluxo de CI e, se quiser, encadeie no `npm test` (por exemplo `lint && tsc --noEmit`).

## Outros scripts

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Servidor de desenvolvimento Vite com HMR |
| `npm run build` | `tsc` + `vite build` (saída em `dist/`) |
| `npm run preview` | Servir a pasta `dist/` localmente após o build |
| `npm run lint` | ESLint (requer configuração ESLint na raiz) |

## Estrutura útil

- `src/pages/` — páginas e rotas principais
- `src/data/` — textos e dados estáticos (serviços, rodapé, projetos)
- `src/components/` — layout e UI compartilhada
- `index.html` — meta tags e JSON-LD base
