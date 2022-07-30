import GeraCPF from './modules/GeraCPF'; // Importando GeraCPF que, por sua vez importa ValidaCPF. Tudo isso será convertido para o bundle tendo o arquivo main como entrada

import './assets/css/style.css';  // Importando o css, importando o arquivo direto

// IIFE
(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();

const btn = document.querySelector("#refresh");
btn.addEventListener("click", () => {
    location.reload();
})