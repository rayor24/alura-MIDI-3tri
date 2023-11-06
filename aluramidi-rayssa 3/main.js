function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listasDeTeclas = document.querySelectorAll('.teclas');

//para
for (let contador = 0; contador < listasDeTeclas.length;) {

    const tecla = listasDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_$(instrumento)`;//template string
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    console.log(contador);

}



