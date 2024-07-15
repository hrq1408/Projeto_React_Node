# Projeto React Node

## Descrição

Este projeto é uma aplicação web desenvolvida com React para o frontend e Node.js para o backend. A aplicação permite criar, listar, editar e excluir produtos. A API foi construída com Node.js e Express, enquanto o frontend foi construído com React e utiliza hooks para gerenciamento de estado.

## Tecnologias Utilizadas

- React
- Node.js
- Express
- MySQL
- CSS

## Desafios Práticos

### Desafio 1: API com Node.js

Descrição: Crie uma API RESTful simples usando Node.js e Express. A API deve permitir operações CRUD (Create, Read, Update, Delete) em uma entidade chamada "Produtos". Cada produto deve ter os seguintes campos: id, nome, descrição, preço e data de criação.

#### Requisitos:
- Use o Express para criar as rotas.
- Utilize um banco de dados (MySQL) para armazenar os dados.
- Implemente validação de dados na criação e atualização de produtos.
- Adicione tratamento de erros adequados.

### Desafio 2: Frontend com React.js

Descrição: Crie uma aplicação frontend usando React.js que consuma a API criada no Desafio 1. A aplicação deve permitir que o usuário veja a lista de produtos, adicione um novo produto, atualize um produto existente e delete um produto.

#### Requisitos:
- Utilize hooks do React para gerenciar o estado da aplicação.
- Implemente formulários para adicionar e atualizar produtos.
- Adicione feedback visual para o usuário (ex: loading spinners, mensagens de sucesso/erro).

### Desafio 3: Integração e Deploy

Descrição: Integre a aplicação frontend com a API backend e faça o deploy das duas partes (frontend e backend) usando um serviço de hospedagem gratuito (ex: Heroku para o backend e Vercel ou Netlify para o frontend).

#### Requisitos:
- Configure o Git para versionamento do código. Crie um repositório no GitHub e faça commits regulares com mensagens claras.
- Escreva um README.md no repositório explicando como configurar e rodar o projeto localmente.
- Adicione instruções no README.md sobre como acessar a aplicação deployada.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com)
- [MySQL](https://www.mysql.com/)

Além disso, é bom ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/).

## Instalação

### Backend

1. Clone o repositório:
    git clone https://github.com/seu-usuario/seu-repositorio.git
    
2. Navegue até o diretório do backend:
    cd pdt-api
    
3. Instale as dependências:
    npm install
    
4. Configure o banco de dados MySQL:
    - Crie um banco de dados chamado
    - Configure as credenciais do banco de dados no arquivo `config.js` ou similar.

5. Inicie o servidor:
    npm start
    

### Frontend

1. Navegue até o diretório do frontend:
    cd frontend
  
2. Instale as dependências:
    npm install
 
3. Inicie a aplicação:
    npm start


## Uso

1. Acesse a aplicação no navegador:    
    http://localhost:3000
    ```
2. Utilize a interface para adicionar, listar, editar e excluir produtos.


## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Deploy

### Backend



