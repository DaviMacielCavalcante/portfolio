document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#textoApresentacao", {
        speed: 90,
        strings: "me chamo Davi, um quase poeta, apaixonado por inteligência artificial.",
        cursor: false
    }).go();    
});