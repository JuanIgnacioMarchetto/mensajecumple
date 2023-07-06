// Obtener la respuesta del usuario
var respuesta = prompt("¿Te acordaste de mi cumpleaños?");

// Verificar la respuesta
if (respuesta.toLowerCase() === "si") {
  // Generar un array con un valor booleano
  var arrayBooleano = [true];

  // Crear un input en el HTML
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "¿Me mandaste mensaje?");
  document.body.appendChild(input);

  // Crear un botón para enviar la respuesta
  var boton = document.createElement("button");
  boton.textContent = "Enviar";
  boton.addEventListener("click", function() {
    var respuestaMensaje = input.value.toLowerCase();
    if (respuestaMensaje === "positivo") {
      var h1 = document.createElement("h1");
      h1.textContent = "¡Gracias por enviar un mensaje de cumpleaños!";
      h1.style.animation = "bounce 0.5s infinite alternate";
      document.body.appendChild(h1);
    }
  });
  document.body.appendChild(boton);
} else {
  // Crear un h1 animado
  var h1 = document.createElement("h1");
  h1.textContent = "¡Gracias por acordarte de mi cumpleaños!";
  h1.style.animation = "bounce 0.5s infinite alternate";
  document.body.appendChild(h1);
}

// CSS para la animación del h1
var style = document.createElement("style");
style.textContent = "@keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-10px); } }";
document.head.appendChild(style);
