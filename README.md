## Descrição

Este é um projeto de teste para desenvolvedores front-end da Anota AI. O projeto consiste em criar um layout com diversos cartões de itens como 'Árvore', 'Flor', 'Fatia de pizza', 'Girassol', 'Pizza', e 'Pizza inteira'. O layout inclui opções para buscar novos produtos e outras funcionalidades.

## Requisitos

- Node.js: 20.11.1
- Angular: 17.3.0

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:
app
├── shared
│   ├── components
│   ├── services
│   └── types
├── views
│   ├── private
│   └── public
├── app.component.html
├── app.component.scss
├── app.component.spec.ts
├── app.component.ts
├── app.config.ts
├── app.route.ts
assets
├── images
├── styles
│   └── .gitkeep
types-modules
├── index.html
├── main.ts
├── styles.scss
.editorconfig

### Descrição das Pastas

- **shared**: Contém componentes reutilizáveis, serviços e tipos.
- **views**: Organiza as páginas em privadas e públicas.
- **assets**: Contém imagens e estilos globais.
- **types-modules**: Contém definições de tipos e módulos auxiliares.
- **root files**: Arquivos principais de configuração e bootstrap da aplicação.

### Componentes Standalone

Os componentes foram gerados como standalone para promover a modularidade e a reutilização. Com componentes standalone, podemos evitar dependências desnecessárias e facilitar o teste e a manutenção do código.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/JessikaAguiar/test-angular-anota-ai.git

2. Navegue até o diretório do projeto:

   ```bash
   cd test-angular-anota-ai
   
3. Instale as dependências:

    ```bash
    npm install

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

    ```bash
       ng serve -0

2. Abra o navegador e acesse:

    ```bash
       http://localhost:4200
