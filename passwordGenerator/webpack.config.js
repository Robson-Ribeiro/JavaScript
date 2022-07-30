// Importar o módulo do node chamado path
const path = require('path');

// Node utiliza CommonJS como sistema de módulos
// diferente do ES6 que é o padrão do JS

// Exportando módulos
// Todo arquivo JS no node é um módulo
// Ao exportar esse arquivo, outros poderam usar parte de seus elementos

module.exports = {  
    mode: 'development', 
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),  
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map'
}


// module.exports = {    // Configuração do webpack
//     mode: 'development',  // Modo no qual estamos trabalhando
//     // Arquivo de entrada :
//     entry: './src/index.js',  // . se refere a pasta atual, enquanto as barras indicam para onde vai
//     // Arquivo de saída: 
//     output: {
//         path: path.resolve(__dirname, 'public', 'assets', 'js'),  //resolve o caminho absoluto, decidindo como vai retratar o caminho a depender do navegador. __dirname se refere ao diretório atual (aula94)
//         filename: 'bundle.js'   // Nome do arquivo
//     },
//     module: {
//         rules: [{
//             exclude: /node_modules/,  // fazendo com que o webpack não analize a pasta node_modules, pois seria lento caso analizasse
//             test: /\.js$/, // testar qual o arquivo que será lido, para saber como formará o bundle
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/env']
//                 }
//             }
//         }]
//     },
//     devtool: 'source-map'  // mapeamento dos arquivos que compoem o bundle, haja vista que ele será composto por diversos arquivos
// }
