// File System:
// É uma api do node utilizada para trabalhar com arquivos e pastas
// Tem funções síncronas e assíncronas
// As síncronas vêm acompanhadas pela terminação Sync

const fs = require('fs').promises; // Retorna promises do fs
const path = require('path');

// fs.readdir retorna um array com os elementos que compoem um diretório
// fs.stat retorna os status de um dir ou arquivo

/* 
O seguinte código permite, a partir de uma pasta raiz, caminhar por várias pastas filhas afim de encontrar os arquivos .css
Para alcançar esse objetivo foram utilizadas duas funções assíncronas em recursão mútua.
*/

async function walker(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);                                            // colocamos o arquivo para que ele seja adicionado no caminho do endereço
        const stats = await fs.stat(fileFullPath);                                                   // obtendo os status do arquivo

        if(/\.git/g.test(fileFullPath)) continue;                                                    // se git ou node_modules estiver presente no caminho da pasta, pule para a próxima iteração.
        if(/node_modules/g.test(fileFullPath)) continue;        
        
        if(stats.isDirectory()) {                                                                    // .isDirectory() mostra se o arquivo é um diretório ou não
            walker(fileFullPath);                                                                    
            continue;                                                                                // Determina para ir a próxima iteração do laço, pulando os comandos seguintes
        }

        if(!/\.css$/.test(fileFullPath)) continue;                                                   // pula a iteração caso seja um arquivo diferente de arquivos .css
        //    .html selecionaria os arquivos html
        console.log(file); 
    }
}

walker('c:/ArquivoX');
