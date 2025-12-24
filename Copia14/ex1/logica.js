function contar(){

    //Puxando todas as entradas de inputs do HTML para o JS (JavaScript)
    var inputinicio = document.getElementById('inicio')
    var inputfim = document.getElementById('fim')
    var inputpasso = document.getElementById('passo')
    var res = document.getElementById('res')


    if(inputinicio.value.length == 0 || inputfim.value.length == 0 || inputpasso.value.length == 0){
        alert('[Erro] por favor, adicione número em todas as caixas')
    } else if(inputinicio <= inputfim){
        var inicio = Number(inputinicio.value)
        var fim = Number(inputfim.value)
        var passo = Number(inputpasso.value)


        for(var contador = inicio; contador <= fim; contador += passo){
            res.innerHTML += `${contador} - `
        }

    } else if (inputinicio > inputfim){
        
        for(contador = inicio; contador > fim; contador -= passo){
            res.innerHTML += `${contador}`
        }
    }
}