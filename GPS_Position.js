
//Esta función llama a las funciones para localizar al usuario
function getGPSPosition(){navigator.geolocation.getCurrentPosition(showCoords, showError);}

 
//Esta función muestra la posicicón del usuario
function showCoords(posicion){

//Este se agregó como un ejemplo para probar el codigo, es el id de un botón
var ubicacion=document.getElementById('localizacion');

var datos='';
//latitud
datos+='Latitud: '+posicion.coords.latitude+'<br>';
//longitud
datos+='Longitud: '+posicion.coords.longitude+'<br>';

//Muestra los datos
ubicacion.innerHTML=datos;

}

 
//Función para manejo de errores 
function showError(error){

alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+

'a internet y habilite la opción permitir compartir ubicación para poder conocer su ubicación actual');

}