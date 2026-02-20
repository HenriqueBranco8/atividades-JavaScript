var alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Carlos", notas: [5, 6, 4] },
    { nome: "Marina", notas: [10, 9, 8] },
    { nome: "João", notas: [6, 6, 7] },
    { nome: "Pedro", notas: [] }
]

//Variáveis
var nomes = ''
var maior_nome = ''
var nota = 0
var quantidade = 0
var maior = 0
var media = 0
var todas_notas = 0
var media_geral = 0
var quantidade_final = 0 //Vai somar todas às notas dentro do vetor 12(doze) notas.
for(let i of alunos){

    //Variáveis que voltam ao zero
    var soma = 0
    //Variáveis que contem o elemento dentro do vetor
    nota = i.notas
    nomes = i.nome
    quantidade = i.notas.length
    quantidade_final += i.notas.length
    
    //Calcula as notas dos alunos
    for(let x of nota){ 
        todas_notas += x // Pega a nota de todo mundo e soma
        soma += x  
    }

    media_geral = todas_notas / quantidade_final //Media da turma completa
    media = soma / quantidade //Media indivudial de cada aluno

    //motrar a maior média de notas e o nome da pessoa com a maior média
        if(media > maior){
            maior = media
            maior_nome = i.nome
        }

    //Se à media for maior ou igual à 7(sete) aparece a mensagem de aprovado
    if(media >= 7){
        console.log(`Nome: ${nomes} || Notas: ${nota} || Nota total: ${soma} || Média: ${media.toFixed(1)} || APROVADO`)
    } 
    
    //Se à media for meno que 7(sete) aparece a mensagem de reprovado
    else{
        console.log(`Nome: ${nomes} || Notas: ${nota} || Nota total: ${soma} || Média: ${media.toFixed(1)} || REPROVADO`)
    }
    
}
//Média geral da turma
console.log(`Media Da Turma:`, media_geral.toFixed(1))

//Maior média
console.log(`Maior Média: ${maior_nome} ${maior} 🏆` )//Coloquei o emoji de propósito só para decorar. NÃO FOI CHATGPT!
