![logo](/src/assets/images/HostCorps.png)

# HostCorps

Website de uma empresa fictícia de provedores de hospedagem. Construído com HTML5, CSS3 e JavaScript puro.


Esta versão do aplicativo utilizou um workflow Webpack para fazer o bundle de seu conteúdo. O webApp pode ser acessado [aqui](https://nothingnothings.github.io/HostCorpsWebpackVersion).


![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/nothingnothings/HostCorpsWebpackVersion/master?style=flat-square)
[![en](https://img.shields.io/badge/lang-en-red.svg?style=flat-square)](https://github.com/nothingnothings/HostCorpsWebpackVersion)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg?style=flat-square)](https://github.com/nothingnothings/HostCorpsWebpackVersion/blob/master/README.pt-br.md)


## Tecnologias

Algumas das linguagens, bibliotecas e pacotes utilizados:

- Node Package Manager (para Webpack e pacotes relacionados ao webpack)
- HTML5
- CSS3 (animações, Flexbox, media queries)
- JavaScript puro (sem frameworks; uso de `var`, funções normais e eventListeners comuns)
- Lógica de validação de formulários (validação básica de entrada, lógica para adicionar e remover estilos "focus" e "invalid", etc.)
- Design responsivo para dispositivos móveis (sidebar, Flexbox, media queries)

## Estrutura de Diretórios do Projeto

O ambiente de desenvolvimento (com o uso de um workflow Webpack), conforme visto na branch `master`:


```
.
│
├── assets\
│   │
│   ├── css\
│   │   ├── common.css
│   │   ├── customers.css
│   │   ├── index.css
│   │   ├── packages.css
│   │   └── start-hosting.css
│   │
│   ├── fonts\
│   │   ├── UniSansHeavyCAPS.woff
│   │   ├── UniSansHeavyCAPS.woff2
│   │   ├── anonymousPro-Bold.ttf
│   │   └── anonymousPro-Regular.ttf
│   │
│   └── images\
│       ├── HostCorps.png
│       ├── HostCorps.svg
│       ├── customer-1.jpg
│       ├── customer-2.jpg
│       ├── customer-3.jpg
│       ├── freedom.jpg
│       └── plan.jpg
│
│
├── js\
│   ├── index.js
│   └── start-hosting.js
│
├── customers.html
├── index.html
├── packages.html
└── start-hosting.html
```

A saída de produção do workflow Webpack, conforme o observado na branch `gh-pages` (responsável pelo deploy do aplicativo):


```
.
│
├── assets\
│   │
│   ├── fonts\
│   │   ├── UniSansHeavyCAPS.woff
│   │   ├── UniSansHeavyCAPS.woff2
│   │   ├── anonymousPro-Bold.ttf
│   │   └── anonymousPro-Regular.ttf
│   │
│   └── images\
│       ├── HostCorps.png
│       ├── customer-1.jpg
│       ├── customer-2.jpg
│       ├── customer-3.jpg
│       ├── freedom.jpg
│       └── plan.jpg
│
│
├── bundle.js
├── customers.html
├── index.html
├── packages.html
└── start-hosting.html
```

## Arquivos de Configuração Webpack e package.json

O arquivo webpack.config.js usado no projeto:

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/js/index.js', './src/js/start-hosting.js'],

  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: (pathData) => {
      const filePath = path
        .dirname(pathData.filename)
        .split('/')
        .slice(1)
        .join('/');
      return `${filePath}/[name][ext]`;
    },
  },
  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'customers.html',
      template: 'src/customers.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'packages.html',
      template: 'src/packages.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'start-hosting.html',
      template: 'src/start-hosting.html',
    }),

    new CleanWebpackPlugin(),
  ],

  performance: {
    hints: false,
  },
};

```

## Configuração

Para usar este projeto, clone-o usando o Git:

1. Execute `git clone` para clonar o projeto em seu repositório Git local
2. Sirva os arquivos com a ajuda de um provedor de hospedagem (frontend-only)

## Destaques

- Múltiplas páginas (diferentes páginas HTML, páginas servidas normalmente)
- Lógica de validação de formulários na página "Start Hosting"
- Design responsivo (mobile e desktop) criado com Flexbox e media queries
- Adição/remoção de classes CSS (animação "slide-in") implementada com JavaScript
- Favicon personalizado, compatível com vários dispositivos

## Inspiração

Inspirado pelo curso "JavaScript - The Complete Guide" de Maximilian Schwarzmüller.



