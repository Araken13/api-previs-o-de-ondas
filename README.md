# 🌊 API de Previsão de Ondas

Esta é uma API desenvolvida com NestJS para registrar e consultar previsões de ondas. O projeto está estruturado em módulos independentes, com integração ao banco de dados PostgreSQL via TypeORM. Ideal para aplicações de monitoramento marítimo, alertas de swell ou integração com automações via n8n.

---

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** — Framework Node.js para aplicações escaláveis
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para JavaScript moderno
- **[TypeORM](https://typeorm.io/)** — ORM para integração com PostgreSQL
- **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional
- **[Docker](https://www.docker.com/)** — Contêineres para ambiente isolado
- **[n8n](https://n8n.io/)** — Automação de workflows (pré-configurado no docker-compose)
- **[ts-node](https://github.com/TypeStrong/ts-node)** — Execução de TypeScript no Node.js
- **@nestjs/typeorm** — Módulo oficial para integração NestJS + TypeORM

---

## 📁 Estrutura do Projeto

```
api-previs-o-de-ondas/
├── src/
│   ├── auth/              # Módulo de autenticação
│   ├── previsao/          # Módulo de previsão de ondas
│   ├── app.module.ts      # Módulo raiz
│   ├── main.ts            # Ponto de entrada da aplicação
│   ├── typeorm.config.ts  # Configuração do TypeORM
│   └── data-source.ts     # Configuração para CLI do TypeORM
├── dist/                  # Arquivos compilados
├── docker-compose.yml     # Infraestrutura com PostgreSQL e n8n
├── tsconfig.json          # Configuração do TypeScript
├── package.json           # Dependências e scripts
```

---

## 📦 Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/Araken13/api-previs-o-de-ondas.git
cd api-previs-o-de-ondas/api
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Compilar o projeto

```bash
npx tsc
```

### 4. Rodar a API

```bash
npm start
```

### 5. Subir o banco de dados com Docker

```bash
docker-compose up -d postgres
```

---

## 📌 Endpoints disponíveis

### 🔹 Auth

- `GET /auth` — Lista todos os usuários
- `POST /auth` — Cria um novo usuário

### 🔹 Previsão

- `GET /previsao` — Retorna uma previsão simulada (em breve: persistência no banco)

---

## 📚 Próximas etapas

- [ ] Criar DTO e POST para salvar previsões
- [ ] Implementar autenticação com JWT
- [ ] Expor API via GraphQL
- [ ] Automatizar alertas com n8n
- [ ] Deploy com Docker em ambiente cloud

---

## 👨‍💻 Autor

**Araken Neto** — Desenvolvedor Full Stack apaixonado por tecnologia, automação e surf.

---

## 📄 Licença

Este projeto está sob a licença MIT.
