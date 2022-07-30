export default class ValidaCPF {   // Quando trabalhamos com módulo, o nome da classe deve ser o mesmo nome do arquivo
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {   // COMO N USA O THIS EM LUGAR ALGUM PODEMOS TRANSFORMA-LA EM UMA FUNÇÃO ESTÁTICA. ATENÇÃO PARA USAR ValidaCPF.geraDigito ao chamar essa função
        // Array.from(cpfSemDigitos) para transformar em array e poder usar .map, .reduce ou .filter
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
}

// console.log(123); Executaria no console do navegador pois 
// foi importado por GeraCPF que foi importado por main
