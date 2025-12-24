function contar(){

    //Puxando todas as entradas de inputs do HTML para o JS (JavaScript)
    var inputinicio = document.getElementById('inicio')
    var inputfim = document.getElementById('fim')
    var inputpasso = document.getElementById('passo')
    var res = document.getElementById('res')

    //Esse bloco verifica se todos os campos foram preenchidos 
    if(inputinicio.value.length = 0 || inputfim.value.length == 0 || inputpasso.value.length == 0){
        alert('[Erro] por favor, adicione número em todas as caixas')
    
    //Se todos os campos foram preenchidos vai verificar todos os inputs e guardar os valores
    } else {
        var inicio = Number(inputinicio.value)
        var fim = Number(inputfim.value)
        var passo = Number(inputpasso.value)

    // Se o input do inicio for menor, vai começar uma contagem de progressão
    } if (inicio < fim){
        for(var contador = inicio; contador < fim; contador += passo){
            res.innerHTML += `${contador} \u{1F449} `
           
        }

    //Se não, se o inicio for menor, vai começar uma contagem regressiva
    } else if (inicio > fim){
        for(contador = inicio; contador > fim; contador -= passo){
            res.innerHTML += `${contador} \u{1F449}`
            
        }

    //Se o inicio for igual ao fim, vai dar erro!
    } else if(inicio == fim){
        alert('Erro! Você já está localizado no Final da corrida.')
    }
     res.innerHTML += `\u{1F3C1}`
    
}