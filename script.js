// const $ = (selector) => document.getElementById(selector);
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

//Boton +nueva operacion
$('#button-operation').addEventListener('click', () => addNewOperation());

const addNewOperation = () =>{
    $('#seccion-balance-y-filtro').classList.add('hidden');
    $('#seccion-operaciones').classList.add('hidden');
    $('#modal-nueva-operacion').classList.remove('hidden');
};

//Boton balance
$('#boton-balance').addEventListener('click', () => returnInicio());

const returnInicio = () =>{
    $('#seccion-balance-y-filtro').classList.remove('hidden');
    $('#seccion-operaciones').classList.remove('hidden');
    $('#modal-nueva-operacion').classList.add('hidden');
    $('#seccion-reportes').classList.add('hidden');
};

//Boton categorias
$('#boton-categorias').addEventListener('click', () => categoryList());

const categoryList = () =>{
    $('#seccion-balance-y-filtro').classList.add('hidden');
    $('#seccion-operaciones').classList.add('hidden');
    $('#modal-nueva-operacion').classList.add('hidden');
    $('#seccion-categorias').classList.remove('hidden');
};

//Boton reportes
$('#boton-reportes').addEventListener('click', () => viewReports());

const viewReports = () =>{
    $('#seccion-balance-y-filtro').classList.add('hidden');
    $('#seccion-operaciones').classList.add('hidden');
    $('#modal-nueva-operacion').classList.add('hidden');
    $('#seccion-categorias').classList.add('hidden');
    $('#seccion-reportes').classList.remove('hidden');
}



//LOCAL STORAGE

const traerDatos = () => {
    return JSON.parse(localStorage.getItem("datos"));
};

const subirDatos = (datos) => {
    localStorage.setItem("datos", JSON.stringify({ ...traerDatos(), ...datos }));
};

//ID
const randomId = () => self.crypto.randomUUID();

//NUEVA OPERACION
const agregarOperacion = () =>{
    let operacion = {
        id: randomId(),
        descripcion: $('#descripcion').value,
        monto: $('#monto').value,
        tipo: $('#tipo').value,
        categoria: $('#select-categoria').value,
        fecha: $('#fecha').value
    }
    subirDatos(operacion) //SE SUBE AL LOCAL STORAGE
    console.log(operacion)
    
}
agregarOperacion()

$('#boton-agregar').addEventListener('click', () => agregarOperacion())




