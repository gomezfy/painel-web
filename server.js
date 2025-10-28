const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Verificar se a pasta dist existe
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ ERRO: Pasta "dist" não encontrada!');
  console.error('');
  console.error('Execute primeiro: npm run build');
  console.error('');
  console.error('📝 Nota: Use "npm run dev" para desenvolvimento no Replit');
  console.error('📝 Use "npm start" apenas para produção (Vertra Cloud)');
  process.exit(1);
}

app.use(express.static(distPath));

app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (!fs.existsSync(indexPath)) {
    return res.status(500).send('Arquivo index.html não encontrado. Execute: npm run build');
  }
  res.sendFile(indexPath);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('✓ Servidor de produção rodando!');
  console.log(`✓ Porta: ${PORT}`);
  console.log(`✓ URL: http://localhost:${PORT}`);
  console.log('');
});
