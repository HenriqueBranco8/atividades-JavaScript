var number_u = document.querySelector('#number_tabuada')
var tabuada = document.querySelector('#tabuada')

function gerar(){
    var deseja_tab = Number(number_u.value)
    var multiplicador = 0
    if(number_u.value.length == 0){
        alert('[ERRO], adicione um número para gerar tabuada')
    } else {
        for(var resultado = multiplicador * deseja_tab; multiplicador <= 10; multiplicador++){
            tabuada.innerHTML += `<br>${deseja_tab} x ${multiplicador} = ${resultado} -- </br>`
        }
    }
}