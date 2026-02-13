
//Se conecta com o HTML
var Inicio = document.querySelector('#inicio')
var Fim = document.querySelector('#fim')
var Passo = document.querySelector('#passo')
var res = document.querySelector('#res') 

//Função click
function conta(){
    //Pega os valores dos inputs e transforma em número
    var inicio = Number(Inicio.value)
    var fim = Number(Fim.value)
    var passo = Number(Passo.value)

    //Se todos os inputs não tiver número, vai aparecer essa mensagem.
    if(Inicio.value.length == 0 && Fim.value.length == 0 && Passo.value.length == 0){
        res.innerHTML = 'Coloque algum número nas caixas de entrada'


    //Se o input 'Inicio' não conter número, vai aparecer esse mensagem.
    } else if(Inicio.value.length == 0){
        alert('Você não adicionou nada no "Inicio". Por favor, adicione algo.')


    //Se o input 'Fim' não conter níumero, vai aparecer essa mensagem.
    }else if(Fim.value.length == 0){
        alert('Você não adicionou nenhum número no "Fim", então vamos levar em consideração o valor 0(zero)')


    //Se o input 'Passo' não conter número, vai aprecer essa mensagem.
    } else if(Passo.value.length == 0){
        res.innerHTML = 'Você não adicionou nada na caixa de "Passo". Não tem como você se mover sem dar nenhum passo!'


    //Se o fim for maior que o inicio, vai aparecer uma ordem crescente do inicio ao fim.    
    } else if (inicio < fim){
        for(inicio == passo; inicio < fim; inicio += passo){
            res.innerHTML += `${inicio} 👉 `
            
        }
        res.innerHTML += `🏁`


    //Se o Incio for mairo que o fim, vai aparecer uma ordem decrescente até chegar ao fim.
    } else if(inicio > fim){
        for(inicio == passo; inicio > fim; inicio -= passo){
            res.innerHTML += `${inicio} 👉 `
        }
        res.innerHTML += `🏁`
    }
    
    
    
     

    
    
}