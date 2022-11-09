const FORM = document.getElementById("form1")
const INPUTNUMBER = document.getElementById("inputNumber");

const CONTAINER = document.getElementById("result_container");

const isEmpty = (idIngresado) => {

    return !idIngresado ? true : false
}
const noCoincide = (idIngresado) => {

    let pizzaSome = pizzas.some(e => e.id == idIngresado);

    return !pizzaSome ? true : false
}

const showError = (message) => {

    CONTAINER.innerHTML =
        `<h2 class="error">${message}</h2>`
}
const showSuccess = (idIngresado) => {
    console.log(idIngresado)
    const pizzaEncontrada = pizzas.find(e => e.id == idIngresado);



    CONTAINER.innerHTML =
        `<h2 class="success-h2">Pizza ${pizzaEncontrada.nombre} ID ${idIngresado}</h2>
        <h3 class="success-h3"> $${pizzaEncontrada.precio}</h3>`
}
const numeroIngresado = () => {

    const idIngresado = INPUTNUMBER.value;
    console.log(idIngresado)

    if (isEmpty(idIngresado)) {

        return showError("Debe Elegir Un Numero");
    } else if (noCoincide(idIngresado)) {
        showError('NO HAY PIZZAS CON ESE ID')
    } else {
        showSuccess(idIngresado)
    }

    return idIngresado
}



const captura = (e) => {
    e.preventDefault();

    numeroIngresado();
    INPUTNUMBER.value = "";
}

const init = () => {

    FORM.addEventListener("submit", captura)
}


init();