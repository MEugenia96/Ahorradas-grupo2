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
$('descripcion').addEventListener('change', () => captarInfo());
$('monto').addEventListener('change', () => captarInfo());
$('tipo').addEventListener('change', () => captarInfo());
$('select-categoria').addEventListener('change', () => captarInfo());
$('fecha').addEventListener('change', () => captarInfo());

let nuevasOperaciones = {};

const captarInfo = () =>{
    // deberia setear un id 
    nuevasOperaciones.Descripcion = $('descripcion').value;
    nuevasOperaciones.Monto = $('monto').value;
    nuevasOperaciones.Tipo = $('tipo').value;
    nuevasOperaciones.Categoria = $('select-categoria').value; //hacer en otra funcion pq tiene valor inicial
    nuevasOperaciones.Fecha = $('fecha').value;
    agregarNuevaOp(nuevasOperaciones)
    
}
console.log(nuevasOperaciones)

$('boton-agregar').addEventListener('click', () => retornarAlInicio())
const retornarAlInicio = () =>{
    returnInicio();
    $('imagen-sin-resultado').classList.add('hidden');
}


const agregarNuevaOp = (nuevasOperaciones) =>{
    const operacionDiv = document.createElement('div');
    operacionDiv.classList.add('columns', 'is-flex');

    $('contenedor-operaciones').innerHTML = '';

    for (let prop in nuevasOperaciones){
        const section = document.createElement('section');
        section.classList.add('column', 'is-3');
    
        const h2 = document.createElement('h2');
        h2.textContent = prop;
    
        const p = document.createElement('p');
        p.classList.add('mt-3');
        p.textContent = nuevasOperaciones[prop];
    
        section.appendChild(h2);
        section.appendChild(p);
    
        $('contenedor-operaciones').appendChild(section);
    };
};

