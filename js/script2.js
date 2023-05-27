function cargarDato() {
let res1, res2, res3


res1=localStorage.getItem( "¿QUE ES MYSQL?" );
res2=localStorage.getItem( "¿QUE ES FIREBASE?" );
res3=localStorage.getItem( "¿QUE ES SQLITE?" );


document.getElementById("respuesta").innerHTML = res1;
document.getElementById("respuesta2").innerHTML = res2;
document.getElementById("respuesta3").innerHTML = res3;


}

cargarDato()