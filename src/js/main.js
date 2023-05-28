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
const novoProjeto = document.getElementById('novoProjeto');
const adicionarProjeto = document.getElementById('adicionarProjeto');
const projeto = document.querySelector('#projeto');
const listaProjetos = document.getElementById('listaProjetos');

novoProjeto.addEventListener('click', () => {
    adicionarProjeto.style.display = '';
});

projeto.addEventListener('click', (e) => {
    e.preventDefault();
    let h3 = document.createElement('h3');
    let titulo = adicionarProjeto.querySelector('#nomeProjeto').value;
    h3.textContent = titulo;
    let tituloLink = document.createElement('a');
    tituloLink.href = '#';
    tituloLink.appendChild(h3)
    let li = document.createElement('li');
    let div = document.createElement('div');
    li.className = 'littleFlexContainer';
    div.className = 'elementos containerProjetos littleFlexContainer';
    div.appendChild(tituloLink);
    li.appendChild(div);
    let icon1 = document.createElement('i');
    let icon2 = document.createElement('i');
    icon2.className = 'fa-sharp fa-regular fa-pen-to-square deleteEdit'
    icon1.className = 'fa-sharp fa-solid fa-circle-xmark deleteEdit';
    div.appendChild(icon1);
    div.appendChild(icon2);
    listaProjetos.appendChild(li);
    adicionarProjeto.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#textoApresentacao", {
        speed: 90,
        strings: "me chamo Davi, um apaixonado por inteligência artificial.",
        cursor: false
    }).go();        
});

window.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    if (!token) {
        document.getElementById('novoProjeto').style.display = 'none';
        document.getElementById('adicionarProjeto').style.display = 'none';
    } else {
        document.getElementById('adicionarProjeto').style.display = 'none';
    }
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
    sistemaClinica.firstElementChild.firstElementChild.innerText = `Um CRUD`
});

sistemaClinica.addEventListener('mouseout', () => {    
    sistemaClinica.innerHTML = `<a href="https://github.com/DaviMacielCavalcante/System_Hospital" target="_blank" id="sistemaClinica">
    <h3>Sistema de Clínicas</h3>
</a>`;
});

apiFilmes.addEventListener('mouseover', () => {
    apiFilmes.firstElementChild.firstElementChild.innerText = `Outro CRUD`
});

apiFilmes.addEventListener('mouseout', () => {
    apiFilmes.innerHTML = `<a href="https://github.com/DaviMacielCavalcante/API-de-Filmes" target="_blank" id="sistemaClinica">
    <h3>API de Filmes</h3>
</a>`
});

pontosInteresse.addEventListener('mouseover', () => {
    pontosInteresse.firstElementChild.firstElementChild.innerText = `Sistema de Localização`
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