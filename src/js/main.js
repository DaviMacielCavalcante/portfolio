const sistemaClinica = document.getElementById('sistemaClinica');
const apiFilmes = document.getElementById('apiFilmes');
const pontosInteresse = document.getElementById('pontosDeInteresse');
const jogo = document.getElementById('jogo');
const elementos = document.querySelectorAll('.elementos');
// Conhecimentos
const elementosConhecimento = document.querySelectorAll('.elementosConhecimento');
const java = document.getElementById('java');
const js = document.getElementById('js');
const html = document.getElementById('html');
const css = document.getElementById('css');
const spring = document.getElementById('spring');
const python = document.getElementById('python');

// Nível de Editor
const novoProjeto = document.getElementById('novoProjeto');
const adicionarProjeto = document.getElementById('adicionarProjeto');
const projeto = document.querySelector('#projeto');
const listaProjetos = document.getElementById('listaProjetos');

// Botões
const deleteIcons = document.querySelectorAll('.fa-sharp.fa-solid.fa-circle-xmark.deleteEdit');
const editIcons = document.querySelectorAll('.fa-sharp.fa-regular.fa-pen-to-square.deleteEdit');

deleteIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const parentElement = e.target.parentElement.parentElement;
        parentElement.remove();
    });    
});

editIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const div = e.target.parentElement;
        const link = div.querySelector('a');
        const h3 = link.querySelector('h3');
        const input = document.createElement('input');

        input.type = 'text';
        input.value = h3.textContent;        

        link.replaceChild(input, h3);

        input.focus();

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const novoH3 = document.createElement('h3');
                novoH3.textContent = input.value;
                link.replaceChild(novoH3, input);
            }
        });

    })
});

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