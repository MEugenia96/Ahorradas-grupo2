const $ = (selector) => document.getElementById(selector);

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

//Agregar nuevas operaciones

//array de objetos para pushear ej nuevasOperaciones.descripcion = valor
const nuevasOperaciones = [
    {}
];

//* Agregar descripcion *//
$('descripcion').addEventListener('change', (e) => captarDescripcion(e));
const captarDescripcion = (e) =>{
    let vlrDescrip = e.target.value;
    nuevasOperaciones[0].descripcion = vlrDescrip
}
//* Agregar monto *//
$('monto').addEventListener('change', (e) => captarMonto(e));
const captarMonto = (e) =>{
    let vlrMonto = e.target.value;
    nuevasOperaciones[0].monto = vlrMonto;
}
//* Agregar tipo *//
$('tipo').addEventListener('change', (e) => captarTipo(e));
const captarTipo = (e) =>{
    let vlrTipo = e.target.value;
    nuevasOperaciones[0].tipo = vlrTipo;
}
//* Agregar categoria *//
$('select-categoria').addEventListener('change', (e) => captarCategoria(e));
const captarCategoria = (e) =>{
    let vlrCategoria = e.target.value;
    nuevasOperaciones[0].categoria = vlrCategoria;
}
//* Agregar fecha *//
$('fecha').addEventListener('change', (e) => captarFecha(e));
const captarFecha = (e) =>{
    let vlrFecha = e.target.value;
    nuevasOperaciones[0].fecha = vlrFecha;
}

console.log(nuevasOperaciones)

// $('boton-agregar').addEventListener('click', () => agregarNuevaOp())

// const agregarNuevaOp = () =>{

// }


