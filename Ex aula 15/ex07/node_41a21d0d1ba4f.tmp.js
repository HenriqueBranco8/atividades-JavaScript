var alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Carlos", notas: [5, 6, 4] },
    { nome: "Marina", notas: [10, 9, 8] },
    { nome: "João", notas: [6, 6, 7] }
]
var nomes = ''
var maior_nome = alunos[0]
var nota = 0
var quantidade = 0
var maior = 0


for(let i of alunos){

    var acumula = 0
    var soma = 0
    nota = i.notas
    nomes = i.nome
    quantidade = i.notas.length
    

    for(let x of nota){
        acumula += x
        soma = acumula
        for(let teste = 0; nomes > nota;teste++){
            teste = nomes
            console.log(teste)
        }
    }


    if(media > maior){
        maior = media
    }
    


    var media = soma / quantidade
    if(media >= 7){
        console.log(`Nome: ${nomes} || Notas: ${nota} || Nota total: ${soma} || Média: ${media.toFixed(1)} || APROVADO`)
    } else {
        console.log(`Nome: ${nomes} || Notas: ${nota} || Nota total: ${soma} || Média: ${media.toFixed(1)} || REPROVADO`)
    }
    
    
}

console.log(`Maior Média: `, maior)

