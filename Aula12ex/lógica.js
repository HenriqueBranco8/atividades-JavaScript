function carregar(){
var guardahoracliente = 15
var escrevehora = document.querySelector('div#escrevehora')
var addimgs = document.querySelector('div#imgs')
if (guardahoracliente < 12 && guardahoracliente >= 6){
    escrevehora.innerHTML = `Agora são ${guardahoracliente} horas da manhã`
    addimgs.src = `img/manha-redonda-250.png`
} else if(guardahoracliente >= 12 && guardahoracliente < 18){
    escrevehora.innerHTML = `Boa Tarde! Agora São ${guardahoracliente} horas`
    addimgs.src = `img/tarde-redonda-250.png`
} else if(guardahoracliente >= 18 && guardahoracliente < 23){
    escrevehora.innerHTML = `Noite Boa! Agora são ${guardahoracliente} horas da noite`
    addimgs.src = `img/noite-redonda-250.png`
} else if(guardahoracliente >= 0 && guardahoracliente < 6){
    escrevehora.innerHTML = `Vamo dormir campeão já são ${guardahoracliente} da madrugada. Ela não vai te ligar`
    addimgs.src = `img/madrugada-redonda-250.png`
}

}   