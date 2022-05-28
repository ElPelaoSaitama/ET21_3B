function login(){
    var correo, pass;
    correo = document.getElementById("exampleInputEmail1").value;
    pass = document.getElementById("exampleInputPassword1").value;

    if(correo == "prueba@gmail.com" && pass == "1234"){
        window.location = "../index.html";
    }else{
        if(correo == ""){
            alert("Debe Ingresar Correo");
            document.getElementById("exampleInputEmail1").focus();
        }else{
            if(pass == ""){
                alert("Debe Ingresar Contraseña");
                document.getElementById("exampleInputPassword1").focus();
            }else{
                if(correo != "prueba@gmail.com" || pass != "1234"){
                    alert("Correo o Contraseña incorrecta");
                    document.getElementById("exampleInputPassword1").value = "";
                }
            }
        }
    }
}

function register(){
    var newNom,newCorreo,newUser,newPass;

    newNom = document.getElementById("nombre").value;
    newCorreo = document.getElementById("correo").value
    newUser = document.getElementById("user").value;
    newPass = document.getElementById("password").value;

    if(newNom == ""){
        alert("Ingrese Nombre");
        document.getElementById("nombre").focus();
    }else{
        if(newCorreo == ""){
            alert("Ingrese Correo");
            document.getElementById("correo").focus();
        }else{
            if(newUser == ""){
                alert("Ingresa Nombre Usuario");
                document.getElementById("user").focus(); 
            }else{
                if(newPass == ""){
                    alert("Ingresa Contraseña");
                    document.getElementById("password").focus();
                }
            }
        }
    }
}


//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}