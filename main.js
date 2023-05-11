const alumno = [];

const inputNombre = document.getElementById('nombre-alumno');
const inputEscuela = document.getElementById('nombre-escuela');
const inputNumeros = document.getElementById('numeros');
const botonEnviar = document.getElementById('cargar');
const formRegistro = document.getElementById('myForm');

botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (validarInputs()) {
        registrarUsuario();
        actualizarNumerosElegidos(numeros);
        alert('Alumno registrado!, bienvenido al concurso');
        limpiarFormulario(formRegistro);

    } else {
        alert('No se pudo registrar al alumno');
    }

});

function actualizarNumerosElegidos(numeros) {
    inputNumeros.placeholder = numeros.join(', ');       
}

const numerosAlumno = [];

function cargarNumeros() {
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Ingrese un número entre 100 y 900"));
        while (isNaN(numero) || numero < 100 || numero > 900) {
            numero = parseInt(prompt("El número ingresado no es válido. Ingrese un número entre 100 y 900"));
        }
        numerosAlumno.push(numero);
    }
    actualizarNumerosElegidos(numerosAlumno);
    return numerosAlumno;
    
}

function registrarUsuario() {
    const numerosAlumno = cargarNumeros();
    const nuevoAlumno = new Alumno(inputNombre.value, inputEscuela.value, numerosAlumno);
    alumno.push(nuevoAlumno);
    console.log(numerosAlumno);
    console.log(alumno)
};

function limpiarFormulario(form) {
    form.reset();
}

function validarInputs() {
    return inputNombre.value !== '' && inputEscuela.value !== '';
}
