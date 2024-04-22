Título: Desenvolvimento de CRUD para Cadastro de Frutas utilizando Node.js e Flask

Objetivo:
Desenvolver um sistema de gerenciamento de frutas com as operações básicas de CRUD (Create, Read, Update, Delete) utilizando Node.js para o backend e Flask para o frontend.

Tecnologias Utilizadas:

Node.js: Ambiente de execução JavaScript no servidor.
Express.js: Framework web para Node.js utilizado para criar o servidor HTTP.
MySQL: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados das frutas.
Flask: Microframework web em Python utilizado para renderizar as páginas HTML e interagir com o banco de dados.


Funcionalidades Implementadas:

Cadastro de Frutas (Create):
Formulário para adicionar novas frutas.
Rota para receber os dados do formulário e inserir uma nova fruta no banco de dados.
Listagem de Frutas (Read):
Tabela para exibir todas as frutas cadastradas.
Consulta ao banco de dados para recuperar todas as frutas cadastradas.
Edição de Frutas (Update):
Botão de edição em cada linha da tabela de frutas.
Página de edição com formulário preenchido com os dados da fruta selecionada.
Rota para receber os dados do formulário e atualizar a fruta correspondente no banco de dados.
Exclusão de Frutas (Delete):
Botão de exclusão em cada linha da tabela de frutas.
Rota para receber o ID da fruta a ser excluída e removê-la do banco de dados.


Estrutura do Projeto:

Node.js Backend:
Arquivo server.js: Configuração do servidor Express.js e definição das rotas CRUD.
Pasta controllers: Contém os arquivos de controle de toda a aplicação.
Pasta routes: Contém os arquivos das rotas para cada operação CRUD.
Pasta templates: Contém os arquivos HTML para renderização das páginas.
Flask Frontend:
Arquivo index.py: Configuração do servidor Flask e definição das rotas para renderização das páginas.
Pasta templates: Contém os arquivos HTML das páginas renderizadas pelo Flask.


Instruções de Uso:

Clonar o repositório do projeto.
Instalar as dependências Node.js utilizando o comando npm install.
Configurar o banco de dados MySQL.
Executar o servidor Node.js utilizando o comando npm run dev.
Acessar a aplicação web no navegador utilizando o endereço fornecido pelo servidor.
