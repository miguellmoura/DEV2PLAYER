 
var valor_compra = 0
// contador de pontos
var pontos_cliente = 100000
var elementocontador_pontos = document.getElementById("contador_pontos")
var fraseContador_pontos = `você possui: ${pontos_cliente} Pontos`
elementocontador_pontos.innerHTML = fraseContador_pontos

// adicionar item au carinho
function adicionar_pc_carinho() {
  document.getElementById("pc_carinho").style.display = "block";
  valor_compra += 65000;
  atualizarValorFinal();
}
function retirar_pc_carinho(){
  document.getElementById("pc_carinho").style.display = "none";
  valor_compra -= 65000;
  atualizarValorFinal();
}
function adicionar_cadeira_carinho(){
  document.getElementById("cadeira_carinho").style.display ="block";
  valor_compra += 15000;
  atualizarValorFinal();
}
function retirar_cadeira_carinho(){
  document.getElementById("cadeira_carinho").style.display = "none";
  valor_compra -= 15000;
  atualizarValorFinal();
}
function adicionar_teclado_carinho(){
  document.getElementById("teclado_carinho").style.display ="block"; 
  valor_compra += 3500;
  atualizarValorFinal();
}
function retirar_teclado_carinho(){
  document.getElementById("teclado_carinho").style.display = "none";
  valor_compra -= 3500;
  atualizarValorFinal();
}
function adicionar_munitor_carinho(){
  document.getElementById("munitor_carinho").style.display ="block";
  valor_compra += 25500;
  atualizarValorFinal();
}
function retirar_munitor_carinho(){
  document.getElementById("munitor_carinho").style.display = "none";
  valor_compra -= 25500;
  atualizarValorFinal();
}
function adicionar_bleze_carinho(){
  document.getElementById("bleze_carinho").style.display ="block";
  valor_compra += 99999999;
  atualizarValorFinal();
}
function retirar_bleze_carinho(){
  document.getElementById("bleze_carinho").style.display = "none";
  valor_compra -= 99999999;
  atualizarValorFinal();
}
function adicionar_mauseped_carinho(){
  document.getElementById("mauseped_carinho").style.display ="block"
  valor_compra += 2700;
  atualizarValorFinal();
}
function retirar_mauseped_carinho(){
  document.getElementById("mauseped_carinho").style.display = "none";
  valor_compra -= 2700;
  atualizarValorFinal();
}
function adicionar_roleta_carinho(){
  document.getElementById("roleta_carinho").style.display ="block";
  valor_compra += 6500;
  atualizarValorFinal();
}
function retirar_roleta_carinho(){
  document.getElementById("roleta_carinho").style.display = "none";
  valor_compra -= 6500;
  atualizarValorFinal();
}
function adicionar_gifitcrd_carinho(){
  document.getElementById("gifitcrd_carinho").style.display ="block";
  valor_compra += 2000;
  atualizarValorFinal();
}
function retirar_gifitcrd_carinho(){
  document.getElementById("gifitcrd_carinho").style.display = "none";
  valor_compra -= 2000;
  atualizarValorFinal();
}
function adicionar_pix_carinho(){
  document.getElementById("pix_carinho").style.display ="block";
  valor_compra += 4500;
  atualizarValorFinal();
}
function retirar_px_carinho(){
  document.getElementById("pix_carinho").style.display = "none";
  valor_compra -= 4500;
  atualizarValorFinal();
}
function atualizarValorFinal() {
  valor_final.innerText = `Valor final: ${valor_compra} Pontos` ;
  console.log(valor_compra)
}


// navegasao do carinhos
function abrir_carinho() {
  document.getElementById("fundo_loga").style.display = "block";
  document.getElementById("carinho_1").style.display = "block";
  atualizarValorFinal();
}
  
function fechar_carinho() {
  document.getElementById("fundo_loga").style.display = "none";
  document.getElementById("carinho_1").style.display = "none";
  document.getElementById("carinho_2").style.display = "none";
  document.getElementById("carinho_3").style.display = "none";
  document.getElementById("carinho_4").style.display = "none";
  }

 
function procimo_1_carinho() {
  if (valor_compra <= pontos_cliente && valor_compra != 0) {
    document.getElementById("carinho_2").style.display = "block";
    document.getElementById("carinho_1").style.display = "none";
    valor_insuficiente.innerText = ` ` ;
  }
  else{
  if(valor_compra = 0){
    valor_insuficiente.innerText = `seu carrinho se encontra vazio` ;
  }
  else{
    valor_insuficiente.innerText = `voce so possui um total de ${pontos_cliente} Pontos` ;
  }
  }
  }
function procimo_2_carinho() {
  if(Nome==""||cpf=="" ){
    campos_vazio.innerText = `preencha todos os campos a cima` ;
  
  }
  else{
  document.getElementById("carinho_3").style.display = "block";
  document.getElementById("carinho_2").style.display = "none";
  }
}
function procimo_3_carinho() {
  document.getElementById("carinho_4").style.display = "block";
  document.getElementById("carinho_3").style.display = "none";
  exibirInformacoesCompra();
}
function carinho_fim() {
  document.getElementById("fundo_loga").style.display = "none";
  document.getElementById("carinho_1").style.display = "none";
  document.getElementById("carinho_2").style.display = "none";
  document.getElementById("carinho_3").style.display = "none";
  document.getElementById("carinho_4").style.display = "none";
}

// funsao carinho_4
function exibirInformacoesCompra(){
 // nome
  var nome_compra = document.getElementById("Nome").value;
  var text_nome = `Nome: ${nome_compra}`;
  confirmaçao_nome.innerText = text_nome;
  // cpf
  var cpf_compra = document.getElementById("cpf").value;
  var text_cpf = `cpf: ${cpf_compra}`;
  document.getElementById("confirmaçao_cpf").textContent = text_cpf;
  // email
  var email_compra = document.getElementById("email").value;
  var text_email = `email: ${email_compra}`;
  document.getElementById("confirmaçao_email").textContent = text_email;
  // telefone
  var telefone_compra = document.getElementById("numero").value;
  var text_telefone = `numero de telefone:  ${telefone_compra}`
  document.getElementById("confirmaçao_telefone").textContent = text_telefone;
  // cep
  var cep_compra = document.getElementById("cep").value;
  var text_cep = `cep: ${cep_compra}`
  document.getElementById("confirmaçao_cep").textContent = text_cep;
  // endereço
  var endereço_compra = document.getElementById("endereço").value;
  var text_endereço = `endereço: ${endereço_compra}`
  document.getElementById("confirmaçao_endereço").textContent = text_endereço;
  // numero
  var numero_compra = document.getElementById("numero_end").value;
  var text_numero = `numero: ${numero_compra}`
  document.getElementById("confirmaçao_numero").textContent = text_numero;
  // complemento
  var complemento_compra = document.getElementById("Complemento").value;
  var text_complemento = `complemento: ${complemento_compra}`
  document.getElementById("confirmaçao_complemento").textContent = text_complemento;
  // valor final
  var text_valor_final = `valor final:  ${valor_compra}`
  document.getElementById("confirmaçao_valor_final").textContent = text_valor_final;
}