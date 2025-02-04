function enviarMensaje() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje");

    if (nombre) {
        mensaje.textContent = "Gracias por tu mensaje, " + nombre + "!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Por favor, ingresa tu nombre.";
        mensaje.style.color = "red";
    }
}
