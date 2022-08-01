const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //.trim() remove os espaços que sobram nas pontas
        listaDeTarefas.push(tarefaTexto);
    }

                                                        //JSON é um formato de texto utilizado para salvar dados entre sistemas.
    const tarefasJSON = JSON.stringify(listaDeTarefas); // converte o array em string e converte a string para JSON, pois assim poderá voltar a ser um array dps.
    localStorage.setItem('tarefas', tarefasJSON);       // localStorage é uma mini base de dados do navegador. 'tarefas' é um nome utilizado para recuperar o valor tarefasJSON. No local storage só se pode salvar strings.

}

function limpaImput() {
    inputTarefa.value = '';
    inputTarefa.focus();   // o input fica com o cursor piscando.
}

function criaBotaoApagar (li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');             // setou o atributo class como apagar: class="apagar"
    botaoApagar.setAttribute('title', 'Apagar essa tarefa'); // mesma coisa só q para o atributo title
    li.appendChild(botaoApagar);
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoImput) {
    const li = criaLi();
    li.innerText = textoImput;
    //criaBotaoApagar(li);
    tarefas.appendChild(li);
    limpaImput();
    criaBotaoApagar(li); //funciona aqui tbm.
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', function(e) {                 // Para quando o Enter for precionado.
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;                                //verificando se tem algum valor colocado no imput.
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', function() {                       // Para quando clicar no botão.
    if (!inputTarefa.value) return;                                    //verificando se tem algum valor colocado no imput.
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();          // remove o pai do elemento, fazendo com que tudo dentro seja removido, incluindo o próprio elemento.
        salvarTarefas();                    // para n salvar as tarefas apagadas.
    }
});

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // obtem o item através do nome setado quando ao invés de getItem se usou setItem.
    const listaDeTarefas = JSON.parse(tarefas);      // converte de volta para um objeto do Java Script, nesse caso um array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
