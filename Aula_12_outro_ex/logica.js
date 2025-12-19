//Essa variável vai ligar o JS com HTML com o input 'Ano de Nascimento'
var guardaano = document.getElementById('add_idade')

//Guarda o valor que o input 'Ano de Nascimento' recebe
var valorcaixaano = Number(guardaano.value)

//Vai conectar com a div vazia para escrever no HTML
var mostraidade = document.getElementById('msg-js')
mostraidade.innerHTML = ``

//Pega a data do usuário
var mostraranousuario = new Date()

//Pega o ano do usuário
var pegaanousuario = mostraranousuario.getFullYear()

//Vai diminuir  
var diminui

