// String.fromCharCode(número); devolve um elemento pertencente a tabela ASCII de acordo com o número enviado

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));  // Com um número aleatório q pode ir de 65 até 91, teremos alguma letra maiúscula da tabel ASCII
const geraMinuscula = () => String.fromCharCode(rand(97, 123));  
const geraNumero = () => String.fromCharCode(rand(48, 58)); 
const simbolos = ',.;^~[]{}!@#$%¨&*()_-=+|/';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(quantidade, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    quantidade = Number(quantidade);


    for(let i = 0; i < quantidade; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());  // Avaliação de curto circuito, se for verdadeiro executa a função, se river falso para no primeiro falso
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolos());
    }

    return senhaArray.join('').slice(0, quantidade);
}
