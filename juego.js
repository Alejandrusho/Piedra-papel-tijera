

/*const botonPiedra = document.getElementById('piedra');
const botonPapel = document.getElementById('papel');
const botonTijera = document.getElementById('tijera');*/
var imgUsuario = document.getElementById('imgUsuario')
var imgAleatorio = document.getElementById('imgAleatorio')

var ganaste = 'Has Ganado!';
var perdiste = 'Perdiste!';
var empate = 'Empate';
var winCounter = 0;
var loseCounter = 0;
var matches = [];

function jugar(usuario){
    var aleatorio = Math.floor(Math.random()* 3) + 1;
    var piedra = document.getElementById('piedra').value;
    var papel = document.getElementById('papel').value;
    var tijera = document.getElementById('tijera').value;
    if (usuario == aleatorio){
        if (usuario == 1 && aleatorio == 1) empatePiedra();
        if (usuario == 2 && aleatorio == 2) empatePapel();
        if (usuario == 3 && aleatorio == 3) empateTijera();

    } else if (usuario == piedra){
        if(aleatorio == papel) perderPiedra();
        if(aleatorio == tijera) ganarPiedra();

    } else if (usuario == papel){
        if(aleatorio == tijera) perderPapel();
        if(aleatorio == piedra) ganarPapel();

    } else if (usuario == tijera){
        if(aleatorio == piedra) perderTijera();
        if(aleatorio == papel) ganarTijera();
    }
    history(usuario, aleatorio);
}

function ganarPiedra(){
    winCounter++;
    document.getElementById('resultadotext').innerHTML = ganaste;
    document.getElementById('victorias').innerHTML = winCounter;
    imgUsuario.src = 'piedra.png';
    imgAleatorio.src = 'tijera.png';
}

function perderPiedra(){
    loseCounter++;
    document.getElementById('resultadotext').innerHTML = perdiste;
    document.getElementById('derrotas').innerHTML = loseCounter;
    imgUsuario.src = 'piedra.png';
    imgAleatorio.src = 'papel.png';
}

function ganarPapel(){
    winCounter++;
    document.getElementById('resultadotext').innerHTML = ganaste;
    document.getElementById('victorias').innerHTML = winCounter;
    imgUsuario.src = 'papel.png';
    imgAleatorio.src = 'piedra.png';
}

function perderPapel(){
    loseCounter++;
    document.getElementById('resultadotext').innerHTML = perdiste;
    document.getElementById('derrotas').innerHTML = loseCounter;
    imgUsuario.src = 'papel.png';
    imgAleatorio.src = 'tijera.png';
}

function ganarTijera(){
    winCounter++;
    document.getElementById('resultadotext').innerHTML = ganaste;
    document.getElementById('victorias').innerHTML = winCounter;
    imgUsuario.src = 'tijera.png';
    imgAleatorio.src = 'papel.png';
}

function perderTijera(){
    loseCounter++;
    document.getElementById('resultadotext').innerHTML = perdiste;
    document.getElementById('derrotas').innerHTML = loseCounter;
    imgUsuario.src = 'tijera.png';
    imgAleatorio.src = 'piedra.png';
}
function empatePiedra(){
    document.getElementById('resultadotext').innerHTML = empate;
    imgUsuario.src = 'piedra.png';
    imgAleatorio.src = 'piedra.png';
}

function empatePapel(){
    document.getElementById('resultadotext').innerHTML = empate;
    imgUsuario.src = 'papel.png';
    imgAleatorio.src = 'papel.png';
}

function empateTijera(){
    document.getElementById('resultadotext').innerHTML = empate;
    imgUsuario.src = 'tijera.png';
    imgAleatorio.src = 'tijera.png';
}

/*function Perder(){
    perdiste
    loseCounter++;
    document.getElementById('resultadotext').innerHTML = perdiste;
    document.getElementById('derrotas').innerHTML = loseCounter;
}*/

function history(usuario, aleatorio){
    document.getElementById('historial').innerHTML = '';
    matches.unshift(usuario + ' - ' + aleatorio);
    if (matches.length > 5){
        matches.pop();
    }
    for (const element of matches){
        let node = document.createElement('p');
        node.innerHTML = element;
        document.getElementById('historial').innerHTML.appendChild(node);
    }
}