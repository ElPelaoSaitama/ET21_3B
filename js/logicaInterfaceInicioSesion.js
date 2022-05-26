document.querySelector('#btnIngresar').addEventListener('click',
iniciarSesion);

function iniciarSesion(){
    var sCorreo = '';
    var sContrasenna = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#exampleInputEmail1').value;
    sContrasenna = document.querySelector('#exampleInputPassword1').value;

    bAcceso = validarCredenciales(sCorreo, sContrasenna);
    
    if(bAcceso == true){
        ingresar();
    }
}
function ingresar(){
    window.location.href = '../index.html'
}