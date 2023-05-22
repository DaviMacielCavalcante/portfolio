const enviar = document.getElementById('enviar');
const limpar = document.getElementById('limpar');
const usuarios = ['davi'];
const senha = ['gatos'];

function limparCampos() {
    document.querySelector('#inputTexto').value = '';
    document.querySelector('#inputSenha').value = '';
};

function autenticarCampos() {
    for (let i = 0; i < usuarios.length; i++) {
        if (document.querySelector('#inputTexto').value === usuarios[i] && document.querySelector('#inputSenha').value === senha[i]) {
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