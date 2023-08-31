//const $ = (selector) => document.getElementById(selector);

//Boton +nueva operacion
$('button-operation').addEventListener('click', () => addNewOperation());

const addNewOperation = () =>{
    $('seccion-balance-y-filtro').classList.add('hidden');
    $('seccion-operaciones').classList.add('hidden');
    $('modal-nueva-operacion').classList.remove('hidden');
};

//Boton balance
$('boton-balance').addEventListener('click', () => returnInicio());

const returnInicio = () =>{
    $('seccion-balance-y-filtro').classList.remove('hidden');
    $('seccion-operaciones').classList.remove('hidden');
    $('modal-nueva-operacion').classList.add('hidden');
    $('seccion-reportes').classList.add('hidden');
};

//Boton categorias
$('boton-categorias').addEventListener('click', () => categoryList());

const categoryList = () =>{
    $('seccion-balance-y-filtro').classList.add('hidden');
    $('seccion-operaciones').classList.add('hidden');
    $('modal-nueva-operacion').classList.add('hidden');
    $('seccion-categorias').classList.remove('hidden');
};

//Boton reportes
$('boton-reportes').addEventListener('click', () => viewReports());

const viewReports = () =>{
    $('seccion-balance-y-filtro').classList.add('hidden');
    $('seccion-operaciones').classList.add('hidden');
    $('modal-nueva-operacion').classList.add('hidden');
    $('seccion-categorias').classList.add('hidden');
    $('seccion-reportes').classList.remove('hidden');
}
