
var respuesta = prompt("¿Te acordaste de mi cumpleaños?");

if (respuesta.toLowerCase() === "si") {
  var arrayBooleano = [true];

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "¿Me mandaste mensaje?");
  document.body.appendChild(input);

  var boton = document.createElement("button");
  boton.textContent = "Enviar";
  boton.addEventListener("click", function() {
    var respuestaMensaje = input.value.toLowerCase();
    if (respuestaMensaje === "si") {
      var h1 = document.createElement("h1");
      h1.textContent = "¡Gracias por acordarte y enviar un mensaje de cumpleaños!";
      h1.style.animation = "bounce 0.5s infinite alternate";
      document.body.appendChild(h1);
    }
  });
  document.body.appendChild(boton);
} else {
  var h1 = document.createElement("h1");
  h1.textContent = "¡Gracias por acordarte de mi cumpleaños!";
  h1.style.animation = "bounce 0.5s infinite alternate";
  document.body.appendChild(h1);
}

var style = document.createElement("style");
style.textContent = "@keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-10px); } }";
document.head.appendChild(style);
