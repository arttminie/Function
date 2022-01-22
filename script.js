function mensagem(){
    console.log("Isto é uma função")
}
mensagem()

function apresentação(nome) {
    console.log(`Meu nome é ${nome}`)
}
apresentação("Brenda")

function eu(nome, idade, music) {
    console.log(`Meu nome é ${nome} e tenho ${idade}, meu estilo musical preferido é ${music}.`)
}
eu("Brenda", 18, "música pop")

function art(filme, música) {
    console.log(`Um filme muito bom é "${filme}", e essa música "${música}" também é boa.`)
}
art("Encanto", "Leilão")

// Bônus

function tri(number) {
   return number*3
}
console.log(tri(5))