const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "transletex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform() {
    form.style.left = "-300px"
    form.style.transform = "transletex(-0%)"
    mascara.style.visibility = "hidden"
}