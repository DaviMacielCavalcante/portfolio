const sistemaClinica = document.getElementById('sistemaClinica');
const apiFilmes = document.getElementById('apiFilmes');
const pontosInteresse = document.getElementById('pontosDeInteresse');
const jogo = document.getElementById('jogo');

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#textoApresentacao", {
        speed: 90,
        strings: "me chamo Davi, um quase poeta, apaixonado por inteligência artificial.",
        cursor: false
    }).go();    

    sistemaClinica.addEventListener('mouseover', () => {
        sistemaClinica.firstElementChild.firstElementChild.innerText = `Essencialmente: um CRUD`
    });
    
    sistemaClinica.addEventListener('mouseout', () => {
        sistemaClinica.innerHTML = `<a href="https://github.com/DaviMacielCavalcante/System_Hospital" target="_blank" id="sistemaClinica">
        <h3>Sistema para Clínicas</h3>
    </a>`
    });
});



