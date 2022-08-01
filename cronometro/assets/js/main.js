const relogio = document.querySelector('.relogio');            
const iniciar = document.querySelector('.iniciar');  // caso use a outra forma de usar o addEventListener, não precisa mais de algumas dessas constantes
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;                                    // Declarando as variáveis fora das funções para poder usalas tbm fora das funções.
let timer;

iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciarRelogio();
    relogio.classList.remove('pausado');             // Removendo uma classe
})

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');                // Adicionando uma classe
})

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
})

function criaHoraComSegundos(segundos) {
    const hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'                             // Para não considerar o fuzo-horário.
    });
}


function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraComSegundos(segundos);
    }, 1000);
}

/*

Outra forma de usar o addEventListener:

document.addEventListener('click', function(e) {
    const elemento = e.target;

    if(elemento.classList.contains('iniciar')) {         // Verificando se o elemento possui a classe 'iniciar'
        clearInterval(timer);
        iniciarRelogio();
        relogio.classList.remove('pausado');
    }

    if...  mesma coisa para os outros botões.
})

*/
