function tocaSom (SeletorAudio ) {
    
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
          //alert('Elemento não encontrado');
          console.log('Elemento ou selector não encontrado!')
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_$(instrumento)`;//template string

tecla.onclick = function () {
    tocaSom(idAudio);
}

tecla.onkeydown = function (evento) {
    if (evento.code === 'Enter' || evento.code === 'Space') {

}
}








