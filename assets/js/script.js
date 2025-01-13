const textoDialogo = document.getElementById('texto-dialogo');
const imagenDialogo = document.getElementById('imagen-dialogo');
const botonesContainer = document.getElementById('botones-container');

const dialogos = [
    { texto: "Veo que tu curiosidad me invocó", imagen: "./assets/img/Bill1.png", botones: ["Siguiente"] },
    { texto: "¿Qué puedo decir? ¡Me siento honrado!", imagen: "./assets/img/Bill2.png", botones: ["Siguiente"] },
    { texto: "Puedo darte lo que quieras: dinero, fama e incluso tu propia galaxia", imagen: "./assets/img/billGif.gif", botones: ["Siguiente"] },
    { texto: "Solo debes estrechar mi mano, ¿qué dices?", imagen: "./assets/img/Bill4.png", botones: ["Sí ", "No"] }
];

const dialogosSi = [
    { texto: "¡Hora de tomar tu cuerpo!", imagen: "./assets/img/BillDeal.png", botones: ["Atrás"] },
    { texto: "Tranquilo, aunque intentes no podrás arrancar de mi tan fácilmente...", imagen: "./assets/img/BillEye.png", botones: ["..."] },
    { texto: "Siempre estaré ahí", imagen: "./assets/img/BillEye.png", botones: ["Siguiente"] }
];

const dialogosNo = [
    { texto: "...", imagen: "./assets/img/BillNo.png", botones: ["Siguiente"] },
    { texto: "...", imagen: "./assets/img/BillMad.png", botones: ["..."] },
    { texto: "No te escaparás tan facil de mi...", imagen: "./assets/img/BillEye.png", botones: ["..."] },
    { texto: "Siempre estaré ahí", imagen: "./assets/img/BillEye.png", botones: ["Siguiente"] }
];

let dialogoActual = 0;
let opcionElegida = null;

function mostrarDialogo(dialogo) {
    textoDialogo.textContent = dialogo.texto;
    imagenDialogo.src = dialogo.imagen;
    botonesContainer.innerHTML = "";

    dialogo.botones.forEach(botonTexto => {
        const boton = document.createElement('button');
        boton.textContent = botonTexto;
        boton.addEventListener('click', () => {
            if (dialogoActual === dialogos.length - 1) {
                opcionElegida = botonTexto;
                dialogoActual = 0;
                if (opcionElegida === "Sí") {
                    mostrarSecuencia(dialogosSi);
                } else if (opcionElegida === "No") {
                    mostrarSecuencia(dialogosNo);
                }
            } else if (botonTexto === "Siguiente") {
                dialogoActual++;
                mostrarDialogo(dialogos[dialogoActual]);
            }
        });
        botonesContainer.appendChild(boton);
    });
}

function mostrarSecuencia(secuencia) {
    let secuenciaActual = 0;

    function actualizarSecuencia() {
        if (secuenciaActual < secuencia.length) {
            const dialogo = secuencia[secuenciaActual];
            textoDialogo.textContent = dialogo.texto;
            imagenDialogo.src = dialogo.imagen;
            botonesContainer.innerHTML = "";

            dialogo.botones.forEach(botonTexto => {
                const boton = document.createElement('button');
                boton.textContent = botonTexto;
                boton.addEventListener('click', () => {
                    secuenciaActual++;
                    if (secuenciaActual < secuencia.length) {
                        actualizarSecuencia();
                    } else {
                        window.location.href = "error404.html";
                    }
                });
                botonesContainer.appendChild(boton);
            });
        }
    }
    actualizarSecuencia();
}

mostrarDialogo(dialogos[dialogoActual]);