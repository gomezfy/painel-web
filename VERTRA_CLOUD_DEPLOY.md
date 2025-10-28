# 🚀 Guia de Deploy para Vertra Cloud

Este guia explica como fazer o deploy do seu site no Vertra Cloud.

## 📋 Pré-requisitos

1. Conta criada no [Vertra Cloud](https://vertracloud.app)
2. Repositório Git configurado (GitHub, GitLab, etc.)

## 🔧 Configuração do Projeto

O projeto já está configurado com tudo que você precisa:

### Estrutura de Arquivos
- `server.js` - Servidor Express para servir os arquivos estáticos
- `dist/` - Pasta com os arquivos compilados (gerada pelo build)
- `package.json` - Scripts e dependências configurados

### Scripts Disponíveis

```bash
# Desenvolvimento local (Replit/localhost)
npm run dev

# Build para produção
npm run build

# Servidor de produção (Vertra Cloud)
npm start
```

## 📦 Passos para Deploy no Vertra Cloud

### 1. Faça o Build do Projeto

Antes de fazer o deploy, você precisa compilar os arquivos:

```bash
npm run build
```

Isso irá gerar a pasta `dist/` com todos os arquivos otimizados.

### 2. Configure o Repositório Git

Certifique-se de que seu código está no GitHub/GitLab:

```bash
git add .
git commit -m "Preparado para deploy no Vertra Cloud"
git push
```

### 3. Configure no Vertra Cloud

1. Acesse o painel do [Vertra Cloud](https://vertracloud.app)
2. Crie um novo projeto/app
3. Conecte seu repositório Git
4. Configure as seguintes opções:

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npm start
```

**Porta:**
- O servidor está configurado para usar a variável `PORT` fornecida pelo Vertra Cloud
- Porta padrão: 3000

### 4. Variáveis de Ambiente (Opcional)

Se você precisar configurar variáveis de ambiente no Vertra Cloud:

- `PORT` - Porta do servidor (geralmente fornecida automaticamente)
- `NODE_ENV=production` - Define o ambiente como produção

## 🌐 Domínio Customizado (CNAME)

Seu domínio no Vertra Cloud: **cname.vertraweb.app**

### Como configurar um domínio customizado:

Se você quiser usar seu próprio domínio (exemplo: seusite.com), configure no painel do Vertra Cloud:

1. Acesse as configurações do projeto no Vertra Cloud
2. Vá em "Domínios" ou "Custom Domain"
3. Adicione seu domínio personalizado
4. Configure os registros DNS no seu provedor de domínio:
   - **Tipo**: CNAME
   - **Nome**: @ ou www
   - **Valor**: cname.vertraweb.app
   - **TTL**: 3600 (1 hora)

**Exemplo de configuração DNS:**
```
Tipo    | Nome | Valor                  | TTL
--------|------|------------------------|------
CNAME   | www  | cname.vertraweb.app   | 3600
CNAME   | @    | cname.vertraweb.app   | 3600
```

### Domínios padrão do Vertra Cloud:
- **CNAME**: cname.vertraweb.app
- O Vertra Cloud fornecerá um subdomínio automático também (ex: seu-projeto.vertraweb.app)

## ✅ Verificação

Após o deploy, seu site estará disponível em:
- Domínio padrão do Vertra Cloud (fornecido após deploy)
- Seu domínio customizado (se configurado)

### O que o servidor faz:
- Serve os arquivos estáticos da pasta `dist/`
- Redireciona todas as rotas para `index.html` (SPA)
- Escuta em `0.0.0.0` para aceitar conexões externas

## 🔍 Troubleshooting

### Erro: "Cannot find module 'express'"
Execute: `npm install`

### Site não carrega após deploy
1. Verifique se o build foi executado: `npm run build`
2. Confirme que a pasta `dist/` existe
3. Verifique os logs do Vertra Cloud

### Erro de porta
O Vertra Cloud geralmente fornece a variável `PORT` automaticamente. O servidor já está configurado para usá-la.

## 📞 Suporte

- Vertra Cloud: [vertracloud.app](https://vertracloud.app)
- Discord do projeto: Entre em contato através do perfil

---

**Nota:** Este projeto usa Vite para desenvolvimento e Express para produção. No Replit, use `npm run dev`. No Vertra Cloud, o sistema usará automaticamente `npm start`.
