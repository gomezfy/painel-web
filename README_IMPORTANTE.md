# ⚠️ IMPORTANTE - Leia antes de usar!

## 🔴 Qual comando usar?

### No Replit (Desenvolvimento):
```bash
npm run dev
```
- ✅ Use este comando para desenvolver aqui no Replit
- ✅ O servidor já está rodando automaticamente
- ✅ Hot reload ativado (vê mudanças em tempo real)
- ✅ Roda na porta 5000

### ❌ NÃO use `npm start` no Replit!
O comando `npm start` é **APENAS** para produção no Vertra Cloud.

---

## 🚀 Para Deploy no Vertra Cloud:

Siga o guia completo em **`VERTRA_CLOUD_DEPLOY.md`**

**Resumo rápido:**
1. Faça push do código para o GitHub
2. No Vertra Cloud, configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
3. O Vertra Cloud vai fazer o build automaticamente

---

## 📁 Sobre a pasta `dist/`

- A pasta `dist/` **existe localmente** mas está no `.gitignore`
- Ela **NÃO** vai para o GitHub (correto, arquivos de build não devem ser versionados)
- No Vertra Cloud, ela será **criada automaticamente** durante o build

---

## ❓ Resolução de Problemas

### Erro: "ENOENT: no such file or directory, stat '/app/dist/index.html"

**Causa:** Você tentou executar `npm start` sem fazer o build primeiro.

**Solução:**
1. No Replit, use `npm run dev` (já está rodando)
2. Se quiser testar o servidor de produção localmente:
   ```bash
   npm run build
   npm start
   ```

### O site não está atualizando no Replit

1. Verifique se o workflow "Server" está rodando
2. Use `npm run dev` (não `npm start`)
3. Recarregue a página

---

## 📊 Comandos Disponíveis

| Comando | Quando usar |
|---------|-------------|
| `npm run dev` | Desenvolvimento no Replit |
| `npm run build` | Gerar arquivos para produção |
| `npm start` | Produção (Vertra Cloud) |
| `npm install` | Instalar dependências |

---

🎯 **Dica:** No Replit, você só precisa do `npm run dev` que já está rodando automaticamente!
