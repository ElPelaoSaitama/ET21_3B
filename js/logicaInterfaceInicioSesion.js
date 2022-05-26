document.querySelector('#btnIngresar').addEventListener('click',
iniciarSesion);

function iniciarSesion(){
    var sCorreo = '';
    var sContrasenna = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#exampleInputEmail1').value;
    sContrasenna = document.querySelector('#exampleInputPassword1').value;

    bAcceso = validarCredenciales(sCorreo, sContrasenna);
    var correo = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;

    if(bAcceso == true){
        ingresar();
    }
        //Validar input vacios
        var correo = document.getElementById("exampleInputEmail1").value;
        var password = document.getElementById("exampleInputPassword1").value;
        if( correo == ""){
            alert("Debe ingresar correo valido.");
            document.getElementById("exampleInputEmail1").focus();
        }else{
            if(password == ""){
                alert("Debe ingresar contraseña")
                document.getElementById("exampleInputPassword1").focus();
            }
        }
        //Validar credenciales
        if(correo != sCorreo){
            alert("Correo invalido");
        }else{
            if(password != sContrasenna)
            alert("Contraseña invalida")
        }
}


function ingresar(){
    window.location.href = '../index.html'
}
function alertRegister(){
    alert("Registrado Exitosamente!");
}
