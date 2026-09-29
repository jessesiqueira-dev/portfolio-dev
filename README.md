# Portfólio — Jessé Siqueira

Portfólio em React e Vite. A página apresenta projetos, tecnologias, trajetória e contato.

## Rodar localmente

Requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra o endereço local exibido pelo Vite no terminal (normalmente http://localhost:5173).

## Compilar para produção

```bash
npm run build
```

O resultado é gerado em `dist/`. A pasta `dist` e as dependências `node_modules` não devem ser enviadas ao GitHub; estão no `.gitignore`.

## Editar o conteúdo

- `src/data/portfolio.js`: projetos e tecnologias.
- `src/components/`: seções da página.
- `src/styles.css`: aparência e responsividade.
- `public/`: fotos e capturas usadas no site.

## Vercel

Importe o repositório do GitHub na Vercel e selecione Vite. Use `npm run build` como comando de build e `dist` como diretório de saída, caso não sejam detectados automaticamente.
