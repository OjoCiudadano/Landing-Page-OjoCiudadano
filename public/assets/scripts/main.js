//VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="Formulario"]');
form.addEventListener("submit", (event) => {
    const fname = form.elements["fname"].value;
    const fapepat = form.elements["fapepat"].value;
    const fapemat = form.elements["fapemat"].value;
    const fdni = form.elements["fdni"].value;
    const fphone = form.elements["fphone"].value;
    const femail = form.elements["femail"].value;
    const fmessage = form.elements["fmessage"].value;
    const fautorization = form.elements["fautorization"];

    if (!fname || !fapemat || !fapepat || !fdni || !fphone || !femail || !fmessage || !fautorization) {
        event.preventDefault();
        alert("Por favor, complete todos los campos del formulario");
    }

    else if (!validateName(fname)) {
        event.preventDefault();
        alert("Por favor, ingrese un nombre valido");
    }

    else if (!validateName(fapemat) || !validateName(fapepat)) {
        event.preventDefault();
        alert("Por favor, ingrese un apellido valido");
    }

    else if (!validateDNI(fdni)) {
        event.preventDefault();
        alert("Por favor, ingrese un DNI válido");
    }

    else if (!validatePhone(fphone)) {
        event.preventDefault();
        alert("Por favor, ingrese un telefono válido");
    }

    else if (!validateEmail(femail)) {
        event.preventDefault();
        alert("Por favor, ingrese un correo válido");
    }

    else if (!fmessage) {
        event.preventDefault();
        alert("Debe escribir un mensaje");
    }

    else if (!fautorization.checked) {
        event.preventDefault();
        alert("Debe aceptar los términos");
    }
});

//CREAR FUNCION validateEmail
function validateName(fname) {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(fname);
}

function validateEmail(femail) {
    const re = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]/;
    return re.test(String(femail).toLowerCase());
}

function validateDNI(fdni) {
    const re = /^[0-9]{8}$/;
    return re.test(String(fdni).toLowerCase());
}

function validatePhone(fphone) {
    const re = /^[0-9]{9}$/;
    return re.test(String(fphone).toLowerCase());
}