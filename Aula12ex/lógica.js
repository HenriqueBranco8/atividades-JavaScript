
var guardahoracliente = 5
var escrevehora = document.querySelector('div#escrevehora')
if (guardahoracliente < 12 && guardahoracliente >= 6){
    escrevehora.innerHTML = `Agora são ${guardahoracliente} horas da manhã`
} else if(guardahoracliente == 12 && guardahoracliente < 18){
    escrevehora.innerHTML = `Boa Tarde! Agora São ${guardahoracliente} horas`
} else if(guardahoracliente == 18 && guardahoracliente < 23){
    escrevehora.innerHTML = `Noite Boa! Agora são ${guardahoracliente} horas da noite`
} else if(guardahoracliente == 0 && guardahoracliente < 6){
    escrevehora.innerHTML = `Vamo dormir campeão já são ${guardahoracliente} da madrugada. Ela não vai te ligar`
}