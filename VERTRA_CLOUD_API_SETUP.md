# 🔑 Como Resolver: "API_KEY_NOT_FOUND" - Vertra Cloud

## ❌ Erro Recebido:
```json
{
  "código": "API_KEY_NOT_FOUND",
  "mensagem": "Chave API não encontrada ou prefixo inválido"
}
```

---

## 🔍 Possíveis Causas:

### 1. **Deploy via Dashboard (Recomendado - SEM API Key)**
Se você está fazendo deploy pelo painel web do Vertra Cloud, você **NÃO** precisa de API key.

✅ **Solução:**
- Acesse o painel: https://vertracloud.app
- Faça login na sua conta
- Crie um novo projeto manualmente
- Conecte seu repositório Git (GitHub/GitLab)
- Configure build e start commands no painel

---

### 2. **Deploy via CLI/API (Precisa de API Key)**
Se você está tentando usar a CLI ou API do Vertra Cloud, precisa gerar uma API key primeiro.

✅ **Como obter sua API Key:**

1. **Acesse o painel do Vertra Cloud**
   - Login em: https://vertracloud.app

2. **Vá em Configurações da Conta**
   - Procure por "API Keys", "Developer Settings", ou "Tokens"
   - Geralmente está em: Conta → Configurações → API/Tokens

3. **Gere uma nova API Key**
   - Clique em "Criar Nova API Key" ou "Generate Token"
   - Dê um nome descritivo (ex: "Deploy Portfolio")
   - **IMPORTANTE**: Copie a chave gerada imediatamente (ela só aparece uma vez!)

4. **Use a API Key**
   ```bash
   # Exemplo de uso (varia conforme a CLI do Vertra Cloud)
   vertra deploy --token=SUA_API_KEY_AQUI
   ```

---

### 3. **Integração Git/GitHub**
Se está conectando o GitHub, você pode precisar:

**Opção A: Via OAuth (Recomendado)**
- No painel do Vertra Cloud, use "Conectar com GitHub"
- Autorize o acesso ao repositório
- Não precisa de API key

**Opção B: Via Deploy Token**
- Gere um Personal Access Token no GitHub
- Configure no Vertra Cloud como credencial Git
- Ou use a API key do próprio Vertra Cloud

---

## 📝 Deploy Manual (Mais Simples)

Se o erro persiste, faça o deploy manual pelo painel:

### Passo a Passo:

1. **Suba seu código para o GitHub**
   ```bash
   git add .
   git commit -m "Preparado para deploy"
   git push origin main
   ```

2. **No Vertra Cloud:**
   - Login → Novo Projeto
   - Conectar Repositório → Selecione seu repo
   - Configure:
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Node Version**: 20 (ou a versão que você usa)
   
3. **Clique em "Deploy"**
   - O Vertra Cloud vai clonar, buildar e iniciar automaticamente
   - Não precisa de API key neste método

---

## 🔐 Formato da API Key (Se Necessário)

Se você já tem uma API key e o erro persiste, verifique:

✅ **Formato correto:**
```bash
# Geralmente é algo como:
vertra_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# ou
vtc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

❌ **Erros comuns:**
- Espaços no início/fim da chave
- Prefixo incorreto (vertra_, vtc_, etc)
- Chave expirada ou revogada
- Chave de ambiente errado (dev vs prod)

---

## 🆘 Se Nada Funcionar:

1. **Verifique a documentação oficial:**
   - https://vertracloud.app/docs (se disponível)
   - Procure por "API Key", "Authentication", ou "Getting Started"

2. **Entre em contato com o suporte:**
   - Discord da Vertra Cloud
   - Email de suporte
   - Chat no painel

3. **Use o método manual (sem API):**
   - Deploy pelo painel web é sempre mais simples
   - Conecte o GitHub diretamente
   - Configure manualmente os comandos

---

## ✅ Resumo Rápido:

| Método | Precisa API Key? | Dificuldade |
|--------|-----------------|-------------|
| Deploy pelo Painel Web | ❌ Não | Fácil ⭐ |
| Conectar GitHub OAuth | ❌ Não | Fácil ⭐ |
| Deploy via CLI | ✅ Sim | Médio ⭐⭐ |
| Deploy via API REST | ✅ Sim | Difícil ⭐⭐⭐ |

**Recomendação:** Use o deploy pelo painel web (não precisa de API key e é muito mais simples!)

---

## 📞 Informações de Suporte:

- **Site:** https://vertracloud.app
- **CNAME Base:** cname.vertraweb.app
- **Projeto Lançado:** Agosto 2025

Se precisar de ajuda específica, entre em contato com o suporte do Vertra Cloud, pois é uma plataforma nova e pode ter particularidades não documentadas publicamente ainda.
