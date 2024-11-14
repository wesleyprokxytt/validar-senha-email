let email = document.getElementById('email')
let senha = document.getElementById('senha')
let mensagem = document.getElementById('mensagem')

function erro(){
    senha.style.border = 'solid 10px #ff2d00'
}
function erroEmail(){
    email.style.border ='solid 3px #ff2d00'
}
  function acerto(){
    senha.style.border ='solid 3px #008000'
}
function acertoEmail(){
    email.style.border = 'solid 3px #008000'
}
document.getElementById ('btn-login').addEventListener('click',function verificarSenha(){
    if(senha.value.length < 8 ||
        !senha.value.match(/[a-z]/) ||
        !senha.value.match(/[A-Z]/) ||
        !senha.value.match(/[0-9]/) ||
        !senha.value.match(/[^a-zA-Z0-9]/)
){
        // mensagem.innerHTML = "senha invalida"
        erro()
 } else{
    //    mensagem.innerHTML = "senha valida" 
        acerto()
}
}   
)

 function verificarEmail(){
    if(email = 'eu@gmail.com'){
        alert('e-mail valido')
    }else{
        alert('e-mail invalido')
    }
 }
  document.getElementById ('btn-login').addEventListener('click', function verificarEmail(){
    if(email.value === 'eu@gmail.com'){
       // alert('e-mail valido')
       acertoEmail()
    }else{
        //alert('e-mail invalido')
        erroEmail()
    }
  }
  )