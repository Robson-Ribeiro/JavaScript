import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

// chkMaiusculas.checked irá retornar true caso esteja checado e false caso n esteja

// Exportando uma função anônima como default
export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerText = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || "Nada selecionado!";  // avaliação de curto circuito para caso não tenha senha por ter uma quantidade de 0 caracteres.
}
