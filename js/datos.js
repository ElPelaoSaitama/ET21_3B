let principal = document.getElementById('cont-princ');


//CREARR ARREGLO DE PRODUCTOS

macetero = new Array();
macetero[0] = ['img/icon.png','nombre1','valor1'],
macetero[1] = ['img/icon.png','nombre2','valor2'],
macetero[2] = ['img/icon.png','nombre3','valor3'];

tierras = new Array();
tierras[0] = ['img/..','nombre','valor'],
tierras[1] = ['img/..','nombre','valor'],
tierras[2] = ['img/..','nombre','valor'],

flores = new Array();
flores[0] = ['img/..','nombre','valor'],
flores[1] = ['img/..','nombre','valor'],
flores[2] = ['img/..','nombre','valor'];

arbustos = new Array();
arbustos[0] = ['img/..','nombre','valor'],
arbustos[1] = ['img/..','nombre','valor'],
arbustos[2] = ['img/..','nombre','valor'];

//RECORRER ARREGLO
if (principal){
   for(i=0;i<macetero.length;i++){
       //SE CREA VARIABLE (let ****) Y SE DELCARA EN QUE ETIQUETA VA A PONER EL VALOR DEL ARREGLO
       let creaDiv = document.createElement('h3');
       let creaimg = document.createElement('img');
       let creaval = document.createElement('p');
       let creaval2 = document.createElement('p');
    //CREA UN DIV CLAS "FOTO"

    //macetero[i][1] EL UNO ES LA POSICION DEL DATO A RECORRER EJ:[0]RECORRE LA FOTO [1] RECORRE EL NOMBRE [2] RECORRE EL VALOR
       creaDiv.setAttribute('class','foto');
       creaDiv.innerHTML = macetero[i][1]
       creaval.innerHTML = macetero[i][2]
       creaval2.innerHTML = macetero[i][3]
       creaimg.setAttribute('src',macetero[i][0]);


       //INSERTA LOS DATOS EN LA ETIQUETAS ASIGNADAS
       principal.appendChild(creaDiv);
       principal.appendChild(creaimg);
       principal.appendChild(creaval);


   }

};