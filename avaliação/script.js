var uma_estrela = document.getElementById("1")
var duas_estrelas = document.getElementById("2")
var tres_estrelas = document.getElementById("3")
var quatro_estrelas = document.getElementById("4")
var cinco_estrelas = document.getElementById("5")
var cont_ext = document.getElementById("cont_ext")
var foto_jogos = document.getElementById("imagem")
var droplist = document.getElementById("droplist")

var tw = document.getElementById("tw")


var avaliacao = false
var qtdEstrelas = 0

var msg = document.getElementById("msg")

function avaliar(){
    avaliacao = true
    console.log(avaliacao)
    console.log(msg.value)
    msg.value = ""
    cont_ext.innerHTML = "<p style='font-size: 50px'> Avaliação enviada! </p>"
}

function estrela1(){
    qtdEstrelas = 1
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
    uma_estrela.style.color = "yellow"
}

function estrela2(){
    qtdEstrelas = 2
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
    uma_estrela.style.color = "yellow"
    duas_estrelas.style.color = "yellow"
}

function estrela3(){
    qtdEstrelas = 3
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
    uma_estrela.style.color = "yellow"
    duas_estrelas.style.color = "yellow"
    tres_estrelas.style.color = "yellow"
}

function estrela4(){
    qtdEstrelas = 4
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
    uma_estrela.style.color = "yellow"
    duas_estrelas.style.color = "yellow"
    tres_estrelas.style.color = "yellow"
    quatro_estrelas.style.color = "yellow"
}

function estrela5(){
    qtdEstrelas = 5
    console.log(`Quantidade de estrelas: ${qtdEstrelas}`)
    uma_estrela.style.color = "yellow"
    duas_estrelas.style.color = "yellow"
    tres_estrelas.style.color = "yellow"
    quatro_estrelas.style.color = "yellow"
    cinco_estrelas.style.color = "yellow"
}


droplist.onchange = (ev) =>{
    let selectedIndex = droplist.selectedIndex;
    
    if (selectedIndex == 0){
        foto_jogos.innerHTML = "<img src='./assets/tlou.png'>"
        uma_estrela.style.color = "gray"
        duas_estrelas.style.color = "gray"
        tres_estrelas.style.color = "gray"
        quatro_estrelas.style.color = "gray"
        cinco_estrelas.style.color = "gray"
    }

    if (selectedIndex == 1){
        foto_jogos.innerHTML = "<img height='400' src='./assets/farcry5.jpg'>"
        uma_estrela.style.color = "gray"
        duas_estrelas.style.color = "gray"
        tres_estrelas.style.color = "gray"
        quatro_estrelas.style.color = "gray"
        cinco_estrelas.style.color = "gray"
    }

    if (selectedIndex == 2){
        foto_jogos.innerHTML = "<img height='400' src='./assets/rdr.jpeg'>"
        uma_estrela.style.color = "gray"
        duas_estrelas.style.color = "gray"
        tres_estrelas.style.color = "gray"
        quatro_estrelas.style.color = "gray"
        cinco_estrelas.style.color = "gray"
    }

    if (selectedIndex == 3){
        foto_jogos.innerHTML = "<img height='400' src='./assets/ac.jpeg'>"
        uma_estrela.style.color = "gray"
        duas_estrelas.style.color = "gray"
        tres_estrelas.style.color = "gray"
        quatro_estrelas.style.color = "gray"
        cinco_estrelas.style.color = "gray"
    }

    if (selectedIndex == 4){
        foto_jogos.innerHTML = "<img height='400' src='./assets/witcher.png'>"
        uma_estrela.style.color = "gray"
        duas_estrelas.style.color = "gray"
        tres_estrelas.style.color = "gray"
        quatro_estrelas.style.color = "gray"
        cinco_estrelas.style.color = "gray"
    }

    
  }