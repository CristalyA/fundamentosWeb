 let nome = window.document.getElementById("nome")
 let email = window.querySelector("#email")
 let assunto = document.querySelector("#assunto")
 let nomeOk = false
 let emailOk = false
 let assuntoOK = false
 let mapa = document.querySelector("mapa")

 nome.style.width = "100%"
 email.style.width = "100%"
 assunto.style.width = "100%"

 function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length <=2) {
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
        txtAssunto.style.dispaly = "none"
    } else {
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "green"
        txtAssunto.style.dispaly = "none"
        nomeOk = true
    }
 }

 function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Em-mail inválido"
        txtEmail.style.color = "red"
        txtAssunto.style.dispaly = "none"
    } else{ 
        txtEmail.innerHTML = "Em-mail valido"
        txtEmail.style.color = "green"
        txtAssunto.style.dispaly = "none"
        emailOk = true
    }
 }

 function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >=100) {
        txtAssunto.innerHTML = "Texto grande, maximo 100 caracteres"
        txtAssunto.style.Color = "red"
        txtAssunto.style.dispaly = "none"
    } else {
        txtAssunto.innerHTML = "Texto valido"
        txtAssunto.style.Color = "green" 
        txtAssunto.style.dispaly = "none"
        assuntoOk = true
    }

 }

 function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert("Formulario Ok")
    } else{
        alert ("Preencha novamente.")
    }
 }

 function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"


 }

 function mapaNormal(){

    mapa.style.width = "800px"
    mapa.style.height = "600px"
 }