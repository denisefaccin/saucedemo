# PROJETO TESTES AUTOMATIZADOS COM CYPRESS

## TESTE TÉCNICO - SAUCE DEMO

Este é um projeto que contém testes automatizados com Cypress.
O objetivo é testar a aplicação Sauce Demo.
Abaixo, seguem as instruções para configurar o ambiente, criar e executar os testes.

Sumário

1. Instalação e Configuração inicial;
2. Configuração do ambiente de teste;
3. Criação e execução dos testes;
4. Melhores práticas;
5. Integração contínua.

6. Instalação e Configuração inicial:
   a. Instalar Node.js (site oficial) ou verificar a versão atual:
   node -v
   b. Criar um projeto com Node.js:
   mkdir nome_do_projeto
   cd nome_do_projeto
   npm init -y
   c. Instalar o Cypress como dependência de desenvolvimento:
   npm install cypress --save-dev
   d. Abrir o Cypress:
   npx cypres open
   e. Configurar o Cypress:
   No arquivo 'cypress.config.js':

```javascript
module.exports = {
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/",
    setupNodeEvents(on, config) {
      // configurar event listeners
    },
  },
};
```

2. Configuração do ambiente de testes:
   a. Configurar variáveis de ambiente:
   No arquivo 'cypree.env.json':

```javascript
    {
        "username": "nome_do_usuario",
        "password": "senha_do_usuario"
    }
```

    b. Adicionar o arquivo 'cypree.env.json' no .git.ignore:
        Na raiz do projeto, crie um arquivo .gitignore e armazene os dados sensíveis;
    c. Configurar Comandos Customizados:
        No arquivo 'cypress/support/commands.js':

```javascript
Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get('input[name="user-name"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('input[type="submit"]').click();
  cy.url().should("include", "/inventory.html");
});
```

3. Criar e Executar testes:
   a. Estrutura de testes:
   Os testes são criados na pasta 'cypress/e2e';
   Exemplo:

```javascript
describe("Fazer o Login", () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Deve exibir a página de inventário após o login", () => {
    cy.contains("Products").should("be.visible");
  });
});
```

b. Executar testes:
Pela interface gráfica:
npx cypress open
Pela linha de comando:
npx cypress run

c. Relatórios de testes
Verifique os relatórios em 'cypress/reports' após a execução dos testes;

d. Depuração e Logs:
Utilize 'cy.debug()' e 'cy.pause()' para depuração.
Capturas de telas e vídeos são armazenados em 'cypress/screenchots' e 'cypress/videos'.

4. Integração Contínua
   Para CI/CD, use o comando para execução de testes no pipeline:
   npx cypress run
