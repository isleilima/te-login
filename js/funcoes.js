function Login(){
    let usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;

    document.querySelector(".mensagem").innerHTML = "Seu usuario é:" + usuario ;
    document.querySelector(".mensagem").innerHTML += "<br>Seu senha é:" + senha ;

     if(usuario == "islei" && senha == "123"){
         document.querySelector(".mensagem").innerHTML = "Informação CORRETA";
     } else{
         document.querySelector(".mensagem").innerHTML = "Informação ERRADA"
     }
}

// document.querySelector("#botaoLogin")addEventListener("click", function(){
//     Login();

// });

