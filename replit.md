# Discord Developer Portfolio

## Overview
Portfólio profissional desenvolvido em TypeScript + Vite para exibir projetos de bots do Discord. Design moderno com tema escuro inspirado nas cores do Discord, apresentando cards de projetos, barras de habilidades e navegação suave.

## Project Structure
- **Frontend Framework**: Vite + TypeScript
- **Styling**: Vanilla CSS com variáveis CSS e gradientes
- **Layout**: Design responsivo com seções dedicadas
- **Port**: 5000 (servidor de desenvolvimento frontend)

## Recent Changes

### October 28, 2025
- ✅ Configurado servidor Express para produção (Vertra Cloud)
- ✅ Adicionado `server.js` para servir arquivos estáticos
- ✅ Criado guia de deploy `VERTRA_CLOUD_DEPLOY.md`
- ✅ Adicionado script `npm start` para ambiente de produção
- ✅ Instaladas dependências necessárias (Express)

### October 27, 2025
- ✅ Redesign completo para portfólio de desenvolvedor
- ✅ Adicionado hero section com call-to-action
- ✅ Grid de projetos do Discord com 6 cards exemplos
- ✅ Seção de skills com barras de progresso animadas
- ✅ Navegação suave entre seções
- ✅ Animações de fade-in nos elementos
- ✅ Design responsivo para mobile
- ✅ Configurado Vite com allowedHosts para Replit
- ✅ Adicionado perfil pessoal do Farley no hero
  - Foto de perfil redonda com borda azul do Discord
  - Nome e título "Discord Developer"
  - Efeito de hover com zoom
- ✅ Sheriff Rex movido para seção de projetos como projeto destacado
  - Card especial com borda destacada
  - Foto redonda do bot (120px)
  - Botão "Adicionar ao Servidor" com link OAuth
  - Link: https://discord.com/oauth2/authorize?client_id=1426734768111747284
  - Gradiente de fundo e sombra especial no hover

## Seções do Site
1. **Hero**: Apresentação principal com título e botões CTA
2. **Sobre**: Descrição do desenvolvedor
3. **Projetos**: Grid com 6 projetos exemplo de bots Discord
   - Bot de Moderação
   - Music Bot
   - Sistema de Economia
   - Dashboard Analytics
   - Ticket System
   - Notification Bot
4. **Skills**: Barras de progresso mostrando tecnologias
5. **Contato**: Links para Discord, GitHub e Email
6. **Footer**: Créditos

## Key Files
- `vite.config.ts`: Configuração Vite com host 0.0.0.0 e allowedHosts
- `src/main.ts`: TypeScript com smooth scroll e animações
- `src/style.css`: Estilos com tema Discord (azul #5865f2)
- `index.html`: Template HTML com todas as seções

## Tecnologias Exibidas
- Discord.js, TypeScript, Node.js
- MongoDB, PostgreSQL, Redis
- React, Express, APIs
- Canvas, Webhooks

## Development
- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server (Replit/localhost)
- The app runs on port 5000 and is accessible via Replit's webview

## Production (Vertra Cloud)
- Run `npm run build` to compile the project
- Run `npm start` to serve the static files with Express
- See `VERTRA_CLOUD_DEPLOY.md` for complete deployment instructions
- Production server uses port from environment variable `PORT` (default: 3000)

## Design Features
- Cores do Discord (#5865f2 como accent)
- Gradientes suaves
- Animações de fade-in e hover effects
- Navegação sticky no topo
- Scroll suave entre seções
- Cards interativos com elevação no hover
