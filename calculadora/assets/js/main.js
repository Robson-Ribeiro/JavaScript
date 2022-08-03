function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
            this.cliqueBotoes();                                                             // sempre q quiser referenciar uma chave do objeto dentro dele mesmo, é necessário usar a palavra this.
            this.pressionaEnter();
    };

    this.pressionaEnter = () => {                                                            // Também poderia ser document.addEventListenter
        this.display.addEventListener('keyup', e => {                                        // arrow function faz com q o this se refira ao objeto e não a quem chamou ele diretamente.
            if(e.keyCode === 13) {                                                           // não precisando portanto do .bind() atrelado a função q está no addEventListener.
                    this.realizaConta();
            }
        })
    };

    this.clearDisplay = () => this.display.value = '';  

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = function () {
        let conta = this.display.value;

        try {
            conta = eval(conta);                                                             // eval() avalia uma string e tenta executar ela como código de JS
                                                                                             // eval é muito perigoso pois permite invasões no sistema por pessoas mal intencionadas.
            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };      
        

    this.cliqueBotoes = function () {
        document.addEventListener('click', function(e) {                                      // poderia usar no lugar uma arrow function para o this ser automaticamente e permanentemente referente a calculadora
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
                this.apagaUm();
            }
                
            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        }.bind(this));                                                                         // fazer com q o this se refira a calculadora e não ao document q chama a função btnParaDisplay.
    };


    this.btnParaDisplay = function (valor) {                                                   // Em arro function ficaria = valor => {}, podemos omitir os parênteses quando só temos um parâmetro.
        this.display.value += valor;
        this.display.focus();                                                                  // para corrigir o problema com o enter
    };
}

const calculadora = new Calculadora();
calculadora.inicia();