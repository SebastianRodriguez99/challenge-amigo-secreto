let nombres = [];
// ingresan los nombres y los guarda anda saber en donde.


function agregarAmigo (){
//esto es para buscar el ID que hay en html al precionar el boton
    let IdHtml = document.getElementById("amigo");
    //se usa el value para que guarde lo que se pone en el casillero, osea guarda el valor
    let nombre = IdHtml.value.trim();
    
    
    
    if (nombre === "") {
        alert("no hay nada escrito"); return;

        
    }
    
   nombres.push(nombre)

   IdHtml.value = "";
   IdHtml.focus ();
   console.log (nombres)

}


 

 
