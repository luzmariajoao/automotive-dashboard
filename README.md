# EU Automotive Market Intelligence Dashboard

Uma dashboard moderna com integração Claude API para análise do mercado automóvel europeu.

## 🚀 Setup Rápido (3 passos)

### 1️⃣ Clonar & Setup

```bash
# Clone o repositório
git clone https://github.com/YOUR_USERNAME/automotive-dashboard.git
cd automotive-dashboard

# Instale dependências
npm install
```

### 2️⃣ Adicionar API Key

1. Crie um ficheiro `.env.local` na raiz do projeto
2. Adicione a sua Anthropic API key:
```
ANTHROPIC_API_KEY=sk-ant-v0-YOUR_KEY_HERE
```

### 3️⃣ Deploy em Vercel

**Opção A: GitHub + Vercel (recomendado)**
1. Push código para GitHub
2. Vai a https://vercel.com
3. Clica "New Project" → Seleciona o repo
4. Vercel detecta Next.js automaticamente
5. Adiciona variável de ambiente: `ANTHROPIC_API_KEY`
6. Clica "Deploy"

**Opção B: Deploy direto (sem GitHub)**
1. Instala Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto: `vercel`
3. Segue as instruções
4. Adiciona API key no dashboard Vercel

---

## 🏗️ Estrutura do Projeto

```
.
├── app/
│   ├── page.jsx          # Dashboard UI
│   └── api/
│       └── chat/
│           └── route.js  # API Claude integration
├── package.json
├── .env.local            # Variáveis de ambiente
└── next.config.js        # Configuração Next.js
```

---

## 💡 Features

- ✅ Dashboard com KPIs automóveis
- ✅ Chat com Claude sobre mercado EU
- ✅ Design moderno e responsivo
- ✅ Deploy grátis em Vercel
- ✅ Permanente (não desaparece)

---

## 🔧 Desenvolvimento Local

```bash
npm run dev
# Vai para http://localhost:3000
```

---

## 📦 Deploy em Produção

Vercel faz deploy automático quando faz push para GitHub!

---

## 🎨 Customização

Edit `app/page.jsx` para mudar:
- Cores (palette: #0B2545, #0F9B8E, #C0392B)
- KPIs e dados
- Título e descrição
- Layout

---

**Pronto para portfolio!** 🚀
