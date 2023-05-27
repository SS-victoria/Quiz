function respuesta() {
let pre1, pre2, pre3

pre1=document.getElementById("pre1").value;
pre2=document.getElementById("pre2").value;
pre3=document.getElementById("pre3").value;


localStorage.setItem("¿QUE ES MYSQL?" , pre1);
localStorage.setItem("¿QUE ES FIREBASE?" , pre2);
localStorage.setItem("¿QUE ES SQLITE?" , pre3);

window.location="respuesta.html"

}