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



const btnAgregar = $('boton-agregar');
btnAgregar.addEventListener('click', () => agregarNuevaOp())
console.log(btnAgregar) //no funciona

const agregarNuevaOp = (operaciones) => {
	const operacionDiv = document.createElement('div');
	operacionDiv.classList.add('columns', 'is-8');

for (let prop in operaciones){
	operacionDiv.innerHTML = `
            <div class="column is-justify-content-space-evenly">
                <section class="is-flex-direction-column">
                    <h2>${prop}</h2>
                    <p class="mt-6">${operaciones[prop]}</p> 
                </section>
            </div>`
	
    }
$('agregado-op').appendChild(operacionDiv);
}



//HACER QUE SE INSERTE EN HTML CUANDO SE APRETE EL BOTON AGREGAR PQ SINO CADA COSA QUE EDITEMOS LA AGREGA