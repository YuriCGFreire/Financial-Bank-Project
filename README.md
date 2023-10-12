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

### A respeito do .env file
- Esse arquivo terá todas as variáveis de ambiente do projeto configuradas. Não é um boa prática subir o arquivo .env, ele precisa estar no arquivo .gitignore do projeto. Entretanto, foi feito o push do arquivo  para facilitar a configuração do projeto para quem utilizá-lo para estudo.

Ex.:
``` 
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=database
TYPEORM_PORT=5432
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=123456789
TYPEORM_DATABASE=NGCash-db

JWT_SECRET_KEY=e2c8642e3fe6175504e3a1f87e9ea6ba
```

**Obs2: Projeto desenvolvido com Postgresql, portanto precisa ser um DB Postgresql.**

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
