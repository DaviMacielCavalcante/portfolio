const sistemaClinica = document.getElementById('sistemaClinica');
const apiFilmes = document.getElementById('apiFilmes');
const pontosInteresse = document.getElementById('pontosDeInteresse');
const jogo = document.getElementById('jogo');
const elementos = document.querySelectorAll('.elementos');
const elementosConhecimento = document.querySelectorAll('.elementosConhecimento');
const java = document.getElementById('java');
const js = document.getElementById('js');
const html = document.getElementById('html');
const css = document.getElementById('css');
const spring = document.getElementById('spring');
const python = document.getElementById('python');

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

elementosConhecimento.forEach(elemento => elemento.addEventListener('click', () => {
    
    elemento.style.backgroundColor = 'rgba(41, 100, 138)'    
    elemento.style.border = '' 
    elemento.firstElementChild.style.color = '#2E9CCA' 
    elemento.firstElementChild.firstElementChild.style.color = '#2E9CCA'
}));

elementosConhecimento.forEach(elemento => elemento.addEventListener('click', () => {
    elemento.style.backgroundColor = 'rgba(41, 99, 138, 0)'    
    elemento.style.border = '1px solid #2E9CCA'
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

java.addEventListener('click', () => {
    java.innerHTML = '';
    java.innerHTML = '<p>Java é uma linguagem de programação de alto nível, orientada a objetos, muito utilizada no desenvolvimento de sistemas.</p>'
});

java.addEventListener('mouseout', () => {
    java.innerHTML = '';
    java.innerHTML = `<i class="devicon-java-plain"></i>`;
});

js.addEventListener('click', () => {
    js.innerHTML = '';
    js.innerHTML = '<p>JavaScript é uma linguagem de programação usada principalmente no desenvolvimento de sites.</p>'
});

js.addEventListener('mouseout', () => {
    js.innerHTML = '';
    js.innerHTML = `<i class="devicon-javascript-plain"></i>`;
});

html.addEventListener('click', () => {
    html.innerHTML = '';
    html.innerHTML = '<p>HTML5 é, possívelmente, a linguagem de marcação mais usada no desenvolvimento de aplicações client-side.</p>'
});

html.addEventListener('mouseout', () => {
    html.innerHTML = '';
    html.innerHTML = `<i class="devicon-html5-plain"></i>`;
});

css.addEventListener('click', () => {
    css.innerHTML = '';
    css.innerHTML = '<p>CSS3 é a linguagem de estilização mais usada no desenvolvimento de aplicações client-side.</p>'
});

css.addEventListener('mouseout', () => {
    css.innerHTML = '';
    css.innerHTML = `<i class="devicon-css3-plain"></i>`;
});

spring.addEventListener('click', () => {
    spring.innerHTML = '';
    spring.innerHTML = '<p>Spring Boot é um dos frameworks baseados em Java mais utilizados no mundo.</p>'
});

spring.addEventListener('mouseout', () => {
    spring.innerHTML = '';
    spring.innerHTML = `<i class="devicon-spring-plain"></i>`;
});

python.addEventListener('click', () => {
    python.innerHTML = '';
    python.innerHTML = '<p>Python é umas das linguagens de programação mais utilizadas em aplicações que trabalham com grandes quantidades de dados.</p>'
});

python.addEventListener('mouseout', () => {
    python.innerHTML = '';
    python.innerHTML = `<i class="devicon-python-plain"></i>`;
});