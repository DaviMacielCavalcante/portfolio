const sistemaClinica = document.getElementById('sistemaClinica');
const apiFilmes = document.getElementById('apiFilmes');
const pontosInteresse = document.getElementById('pontosDeInteresse');
const jogo = document.getElementById('jogo');
const elementos = document.querySelectorAll('.elementos');

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#textoApresentacao", {
        speed: 90,
        strings: "me chamo Davi, um quase poeta, apaixonado por inteligência artificial.",
        cursor: false
    }).go();        
});

elementos.forEach(elemento => elemento.addEventListener('mouseover', () => {
    elemento.style.backgroundColor = 'rgba(41, 99, 138, 0)'    
    elemento.style.border = '1px solid #2E9CCA'
    elemento.firstElementChild.style.color = '#2E9CCA' 
    elemento.firstElementChild.firstElementChild.style.color = '#2E9CCA'
}));

elementos.forEach(elemento => elemento.addEventListener('mouseout', () => {
    elemento.style.backgroundColor = 'rgba(41, 100, 138)'    
    elemento.style.border = '' 
    elemento.firstElementChild.style.color = 'white' 
    elemento.firstElementChild.firstElementChild.style.color = 'white'    
}));

sistemaClinica.addEventListener('mouseover', () => {
    sistemaClinica.firstElementChild.firstElementChild.innerText = `Essencialmente: um CRUD`
});

sistemaClinica.addEventListener('mouseout', () => {    
    sistemaClinica.innerHTML = `<a href="https://github.com/DaviMacielCavalcante/System_Hospital" target="_blank" id="sistemaClinica">
    <h3>Sistema para Clínicas</h3>
</a>`;
});

apiFilmes.addEventListener('mouseover', () => {
    apiFilmes.firstElementChild.firstElementChild.innerText = `Apenas outro CRUD`
});

apiFilmes.addEventListener('mouseout', () => {
    apiFilmes.innerHTML = `<a href="https://github.com/DaviMacielCavalcante/API-de-Filmes" target="_blank" id="sistemaClinica">
    <h3>API de Filmes</h3>
</a>`
});

pontosInteresse.addEventListener('mouseover', () => {
    pontosInteresse.firstElementChild.firstElementChild.innerText = `Sistema de geolocalização`
});

pontosInteresse.addEventListener('mouseout', () => {
    pontosInteresse.innerHTML = `<a href="https://github.com/DaviMacielCavalcante/Pontos-de-interesse" target="_blank" id="pontosDeInteresse">
    <h3>Pontos de Interesse</h3>
</a>`
});

jogo.addEventListener('mouseover', () => {
    jogo.firstElementChild.firstElementChild.innerText = `Um dungeon-crawler`
});

jogo.addEventListener('mouseout', () => {
    jogo.innerHTML = `<a href="https://github.com/DaviMacielCavalcante/dungeon-crawler" target="_blank" id="jogo">
    <h3>Um jogo</h3>
</a>`
});


