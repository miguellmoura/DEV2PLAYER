var nome = document.getElementById("nome")
var email = document.getElementById("email")
var senha = document.getElementById("senha")
var senha_confirmada = document.getElementById("senha_confirmar")
var senha_errada = document.getElementById("senha_errada")

function cadastrar(){
    if (senha.value != senha_confirmada.value){
        senha_errada.innerHTML += "<h6 style='color: greenyellow'> As senhas não batem! </h6>"
    } else{
        document.body.innerHTML = "<h1> Cadastro realizado! </h1>"
    }
}