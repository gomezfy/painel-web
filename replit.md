# Discord Developer Portfolio

## Overview
Portfólio profissional desenvolvido em TypeScript + Vite para exibir projetos de bots do Discord. Design moderno com tema escuro inspirado nas cores do Discord, apresentando cards de projetos, barras de habilidades e navegação suave.

## Project Structure
- **Frontend Framework**: Vite + TypeScript
- **Styling**: Vanilla CSS com variáveis CSS e gradientes
- **Layout**: Design responsivo com seções dedicadas
- **Port**: 5000 (servidor de desenvolvimento frontend)

## Recent Changes (October 27, 2025)
- ✅ Redesign completo para portfólio de desenvolvedor
- ✅ Adicionado hero section com call-to-action
- ✅ Grid de projetos do Discord com 6 cards exemplos
- ✅ Seção de skills com barras de progresso animadas
- ✅ Navegação suave entre seções
- ✅ Animações de fade-in nos elementos
- ✅ Design responsivo para mobile
- ✅ Configurado Vite com allowedHosts para Replit
- ✅ Adicionado botão "Adicionar Bot" no hero com link do Discord OAuth
  - Link: https://discord.com/oauth2/authorize?client_id=1426734768111747284
  - Estilo visual destacado com cor do Discord (#5865f2)
  - Animação de hover com elevação e sombra

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
- Run `npm run dev` to start the development server
- The app runs on port 5000 and is accessible via Replit's webview

## Design Features
- Cores do Discord (#5865f2 como accent)
- Gradientes suaves
- Animações de fade-in e hover effects
- Navegação sticky no topo
- Scroll suave entre seções
- Cards interativos com elevação no hover
