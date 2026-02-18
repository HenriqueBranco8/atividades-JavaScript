var alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Carlos", notas: [5, 6, 4] },
    { nome: "Marina", notas: [10, 9, 8] },
    { nome: "João", notas: [6, 6, 7] }
]
var soma = 0
var teste = alunos[0]
for(let i of alunos){
    if(i.notas > alunos.notas){
        teste = i.notas
    }
    soma += teste.notas
}
console.log(`SOMA`, soma)


/*
for(let i of alunos){
    soma = i.notas
    nomes = i.nome
    quantidade += i.notas.length
    console.log(`nome: ${nomes} | notas: ${soma}| media da turma: ${soma / quantidade}`)
}
*/