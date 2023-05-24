const enviar = document.getElementById('enviar');
const limpar = document.getElementById('limpar');
const usuarios = ['davi'];
const senha = ['gatos'];
const visitante = document.getElementById('visitantes');
const token = 'sou_editor';

function limparCampos() {
    document.querySelector('#inputTexto').value = '';
    document.querySelector('#inputSenha').value = '';
};

function autenticarCampos() {
    for (let i = 0; i < usuarios.length; i++) {
        if (document.querySelector('#inputTexto').value === usuarios[i] && document.querySelector('#inputSenha').value === senha[i]) {
            localStorage.setItem('token', token)
            document.getElementById('form').action = "/src/pages/main.html"
        }
    }
    
};

limpar.addEventListener('click', () => {
    limparCampos();
 });

enviar.addEventListener('click', () => {
    autenticarCampos();
 });

 visitante.addEventListener('click', () => {
    document.getElementById('form').action = "/src/pages/main.html"
 });