function contar(){
    //Esse bloco puxar os inputs do HTML e vai guardar as informações
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('Fim')
    var passo = document.getElementById('Passo')


    //Vai escrever no HTML
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Erro! Falta Dados')
    }   else {
        res.innerHTML = 'Contando: '
        var valorinicio = Number(inicio.value)
        var varlorfim = Number(fim.value)
        var valorpasso = Number(passo.value)

        for(var contador = valorinicio; contador <= varlorfim; contador += valorpasso){
            res.innerHTML += `${contador}`
        }
    }
    

}