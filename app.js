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
   MostrarLista();

   IdHtml.value = "";
   //.focus ( hace que el cursor se vuelva a poner en el lugar blanco)
   IdHtml.focus ();
   console.log (nombres)

}

function MostrarLista (){
    // For (inicio;condicion;incremento)

    let listaAmigos = document.getElementById ("listaAmigos")
    listaAmigos.innerHTML =""

    for( let i=0 ; i < nombres.length ; i++  ) {
        let item = document.createElement ("li");
        item.textContent = nombres [i]
        listaAmigos.appendChild (item);
    }

}



 

 
