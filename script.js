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

      // Crear la estructura HTML de los globos
      var ul = document.createElement("ul");
      ul.classList.add("globos");

      for (var i = 0; i < 7; i++) {
        var li = document.createElement("li");
        var div = document.createElement("div");
        div.classList.add("hilo");
        li.appendChild(div);
        ul.appendChild(li);
      }

      document.body.appendChild(ul);
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
style.textContent = `
@keyframes bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}

body {
  background: #94d4d6;
}

ul.globos {
  position: relative;
  display: block;
  width: 50%;
  height: 500px;
  margin: 9px auto;
  list-style: none;
  animation: subir 9s alternate infinite;
  -moz-animation: subir 9s alternate infinite; /* Firefox */
  -webkit-animation: subir 9s alternate infinite; /*Safari y Chrome*/
  -o-animation: subir 9s alternate infinite;
}

ul.globos li {
  width: 90px;
  height: 90px;
  -moz-border-radius: 90px 90px 3px 90px;
  border-radius: 90px 90px 12px 90px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

ul.globos li:nth-child(1) {
  position: absolute;
  background: #db6083;
  margin: 90px 468px;
  -webkit-transform: rotate(70deg);
  -moz-transform: rotate(70deg);
  -ms-transform: rotate(70deg);
  -o-transform: rotate(70deg);
  transform: rotate(70deg);
  animation: glo1 9s alternate infinite;
  -moz-animation: glo1 9s alternate infinite; /* Firefox */
  -webkit-animation: glo1 9s alternate infinite; /*Safari y Chrome*/
  -o-animation: glo1 9s alternate infinite;
}

ul.globos li:nth-child(1)::before {
  content: "";
  display: block;
  background: #ef688f;
  margin: 3px 12px;
  width: 75px;
  height: 75px;
  -moz-border-radius: 90px 90px 3px 90px;
  border-radius: 90px 90px 12px 90px;
}

ul.globos li:nth-child(1)::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 21px solid #db6083;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 6px 83px;
}

ul.globos li:nth-child(2) {
  position: absolute;
  background: #0083bd;
  margin: 90px 352px;
  -webkit-transform: rotate(21deg);
  -moz-transform: rotate(21deg);
  -ms-transform: rotate(21deg);
  -o-transform: rotate(21deg);
  transform: rotate(21deg);
  animation: glo1 6s alternate infinite;
  -moz-animation: glo1 6s alternate infinite; /* Firefox */
  -webkit-animation: glo1 6s alternate infinite; /*Safari y Chrome*/
  -o-animation: glo1 6s alternate infinite;
}

ul.globos li:nth-child(2)::before {
  content: "";
  display: block;
  background: #008fcd;
  margin: 3px 12px;
  width: 75px;
  height: 75px;
  -moz-border-radius: 90px 90px 3px 90px;
  border-radius: 90px 90px 12px 90px;
}

ul.globos li:nth-child(2)::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 21px solid #0083bd;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 6px 83px;
}

ul.globos li:nth-child(3) {
  position: absolute;
  background: #2e015c;
  margin: 50px 409px;
  animation: glo2 9s alternate infinite;
  -moz-animation: glo2 9s alternate infinite; /* Firefox */
  -webkit-animation: glo2 9s alternate infinite; /*Safari y Chrome*/
  -o-animation: glo2 9s alternate infinite;
}

ul.globos li:nth-child(3)::before {
  content: "";
  display: block;
  background: #3e0677;
  margin: 3px 12px;
  width: 75px;
  height: 75px;
  -moz-border-radius: 90px 90px 3px 90px;
  border-radius: 90px 90px 12px 90px;
}

ul.globos li:nth-child(3)::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 21px solid #2e015c;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 6px 83px;
}

ul.globos li:nth-child(4) {
  position: absolute;
  background: #006c68;
  margin: 142px 512px;
  -webkit-transform: rotate(85deg);
  -moz-transform: rotate(85deg);
  -ms-transform: rotate(85deg);
  -o-transform: rotate(85deg);
  transform: rotate(85deg);
  animation: glo3 7s alternate infinite;
  -moz-animation: glo3 7s alternate infinite; /* Firefox */
  -webkit-animation: glo3 7s alternate infinite; /*Safari y Chrome*/
  -o-animation: glo3 7s alternate infinite;
}

ul.globos li:nth-child(4)::before {
  content: "";
  display: block;
  background: #018782;
  margin: 3px 12px;
  width: 75px;
  height: 75px;
  -moz-border-radius: 90px 90px 3px 90px;
  border-radius: 90px 90px 12px 90px;
}

ul.globos li:nth-child(4)::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 21px solid #006c68;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 6px 83px;
}

ul.globos li:nth-child(5) {
  position: absolute;
  background: #fa5b5b;
  margin: 142px 304px;
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  -o-transform: rotate(5deg);
  transform: rotate(5deg);
  animation: glo4 7s alternate infinite;
  -moz-animation: glo4 7s alternate infinite; /* Firefox */
  -webkit-animation: glo4 7s alternate infinite; /*Safari y Chrome*/
  -o-animation: glo4 7s alternate infinite;
}

ul.globos li:nth-child(5)::before {
  content: "";
  display: block;
  background: #f96d6d;
  margin: 3px 12px;
  width: 75px;
  height: 75px;
  -moz-border-radius: 90px 90px 3px 90px;
  border-radius: 90px 90px 12px 90px;
}

ul.globos li:nth-child(5)::after{
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 21px solid #fa5b5b;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 6px 83px;
}

@keyframes subir {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes glo1 {
  0% {
    transform: translateX(0) rotate(70deg);
  }
  100% {
    transform: translateX(500px) rotate(70deg);
  }
}

@keyframes glo2 {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(-500px) rotate(0deg);
  }
}

@keyframes glo3 {
  0% {
    transform: translateX(0) rotate(85deg);
  }
  100% {
    transform: translateX(500px) rotate(85deg);
  }
}

@keyframes glo4 {
  0% {
    transform: translateX(0) rotate(5deg);
  }
  100% {
    transform: translateX(-500px) rotate(5deg);
  }
}
`;

document.head.appendChild(style);
