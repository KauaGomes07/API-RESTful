# API de Autenticação com Express, TypeScript, MongoDB e Prisma

## Sobre o projeto

Esta é uma **API RESTful** construída com **Node.js**, **Express** e **TypeScript**, utilizando o **Prisma ORM** para comunicação com o **MongoDB**.

A aplicação implementa um sistema de **cadastro e login de usuários**, protegendo rotas privadas com **JWT (JSON Web Token)**.  
As senhas são **criptografadas com bcrypt**, garantindo segurança no armazenamento dos dados.

---

## Tecnologias utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor  
- **Express** – Framework para criação de rotas e middlewares  
- **TypeScript** – Tipagem estática e maior segurança no código  
- **Prisma ORM** – Mapeamento objeto-relacional para interação com o banco de dados  
- **MongoDB** – Banco de dados NoSQL  
- **bcrypt** – Criptografia de senhas  
- **jsonwebtoken (JWT)** – Autenticação baseada em tokens  
- **dotenv** – Gerenciamento de variáveis de ambiente  

---

## Funcionalidades

-  **Cadastro de usuário** (`POST /cadastro`)  
  Cria um novo usuário com nome, e-mail e senha criptografada.

-  **Login de usuário** (`POST /login`)  
  Autentica o usuário e retorna um **token JWT**.

-  **Listagem de usuários (rota privada)** (`GET /listar-usuarios`)  
  Acesso permitido **apenas com token válido**.

-  **Middleware de autenticação**  
  Verifica o token antes de permitir o acesso às rotas protegidas.

---

## Boas práticas aplicadas

- Estrutura modular e organizada  
- Separação clara entre **rotas** e **middlewares**  
- Tipagem forte com **TypeScript**  
- Uso do **Prisma Client** para consultas seguras
- Tratamento de erros com `try/catch`  
- Omissão de senhas nas respostas da API  
- Variáveis sensíveis protegidas via `.env`

## Estrutura de pastas (exemplo)
//Extensão FileTree Pro usada para gerar a árvore do projeto
```bash

├── 📁 middlewares/
│   └── 📄 auth.ts
├── 📁 prisma/
│   └── 📄 schema.prisma
├── 📁 src/
│   ├── 📁 routes/
│   │   ├── 📄 private.ts
│   │   └── 📄 public.ts
│   ├── 📁 types/
│   │   └── 📄 express.d.ts
│   └── 📄 server.ts
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 prisma.config.ts
└── ⚙️ tsconfig.json


---

## Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git

# Acesse o diretório
cd nome-do-projeto

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Gere o cliente Prisma
npx prisma generate

# Inicie o servidor
npm run dev

A API estará disponível em: 
http://localhost:3000