function gerar_tabuada(){
    var puxainput = document.getElementById('entrada1')
    var res = document.getElementById('res')

    
    
    if(puxainput.value.length == 0 ){
        alert('Erro, você digitou nenhum número! Adicione um número')
    } else {
        var input1 = Number(puxainput.value)

        var resultado1 = input1 * 1
        var resultado2 = input1 * 2 
        var resultado3 = input1 * 3 
        var resultado4 = input1 * 4 
        var resultado5 = input1 * 5 
        var resultado6 = input1 * 6 
        var resultado7 = input1 * 7 
        var resultado8 = input1 * 8 
        var resultado9 = input1 * 9 
        var resultado10 = input1 * 10 

        res.innerHTML = `${input1} x 1 = ${resultado1}<br> ${input1} x 2 = ${resultado2}<br> ${input1} x 3 = ${resultado3}<br> ${input1} x 4 = ${resultado4}<br> ${input1} x 5 = ${resultado5}<br> ${input1} x 6 = ${resultado6}<br> ${input1} x 7 = ${resultado7}<br> ${input1} x 8 = ${resultado8}<br> ${input1} x 9 = ${resultado9}<br> ${input1} x 10 = ${resultado10}`
    }

}