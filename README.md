# Financial Bank Project

##Descrição

Projeto que simula transações bancárias entre os usuários cadastrados no mesmo banco.

## Linguagens, tecnologias e ferramentas utilizadas

<br>

- Docker
- Node
- PostgreSQL
- Javascript
- Typescript
- TypeORM
- UUID
- Nextjs
- ReactHook Form
- React Toastify
- Html
- CSS

<br>

## Configuração e como rodar o projeto

### Configuração do arquivo .env
- Primeiro precisando configurar o arquivo ".env" (no backend). Há um arquivo no backend (envFile) com todas as variáveis já preenchidas para serem usadas como variáveis de ambiente, a única que precisa ser preenchida é "JWT_SECRET_KEY="

Ex.:
``` 
TYPEORM_CONNECTION=postgres (essa variável deverá ter esse valor)
TYPEORM_HOST=ip_da_maquina_onde_está_rodando_o_db
TYPEORM_PORT=porta_do_seu_banco_de_dados
TYPEORM_USERNAME=user_name_do_seu_banco_de_dados
TYPEORM_PASSWORD=senha_do_seu_banco_de_dados
JWT_SECRET_KEY=chave_a_ser_usada_no_JWT
```

**Obs2: Projeto desenvolvido com Postgresql, para isso precisa ser um DB Postgresql.**

### Rodando o projeto
- Se você possui docker instalado, basta abrir o terminal na pasta do projeto (Financial-Bank-Project) e rodar o comando docker-compose up, será feita a instalação das dependências e inicialização tanto do backend, quanto do frontend. O projeto foi dockerizado e irá rodar como desenvolvimento. 

- Se não possuir o docker instalado, abra o terminal na pasta backend e rode o comando "npm i" para instalar as dependências, defina as variáveis do arquivo ".env" com as informações do seu banco de dados postgresql e depois rode o comando "npm run start:dev". Após isso, abra o terminal na pasta frontend, instale as dependências (npm i) e rode o comando "npm run dev".

Ex. das variáveis de ambiente:
``` 
TYPEORM_CONNECTION=postgres (essa variável deverá ter esse valor)
TYPEORM_HOST=ip_da_maquina_onde_está_rodando_o_db
TYPEORM_PORT=porta_do_seu_banco_de_dados
TYPEORM_USERNAME=user_nome_do_seu_banco_de_dados
TYPEORM_PASSWORD=senha_do_seu_banco_de_dados
JWT_SECRET_KEY=chave_a_ser_usada_no_JWT
```
##
