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
let nuevasOperaciones = [
    {}
];

//* Agregar descripcion *//
$('descripcion').addEventListener('change', (e) => captarDescripcion(e));
const captarDescripcion = (e) =>{
    let vlrDescrip = e.target.value;
    nuevasOperaciones.Descripcion = vlrDescrip;
    agregarNuevaOp(nuevasOperaciones)
}
//* Agregar monto *//
$('monto').addEventListener('change', (e) => captarMonto(e));
const captarMonto = (e) =>{
    let vlrMonto = e.target.value;
    nuevasOperaciones.Monto = vlrMonto;
    agregarNuevaOp(nuevasOperaciones)
}
//* Agregar tipo *//
$('tipo').addEventListener('change', (e) => captarTipo(e));
const captarTipo = (e) =>{
    let vlrTipo = e.target.value;
    nuevasOperaciones.Tipo = vlrTipo;
    agregarNuevaOp(nuevasOperaciones)
}
//* Agregar categoria *//
$('select-categoria').addEventListener('change', (e) => captarCategoria(e));
const captarCategoria = (e) =>{
    let vlrCategoria = e.target.value;
    nuevasOperaciones.Categoria = vlrCategoria;
    agregarNuevaOp(nuevasOperaciones)
}
//* Agregar fecha *//
$('fecha').addEventListener('change', (e) => captarFecha(e));
const captarFecha = (e) =>{
    let vlrFecha = e.target.value;
    nuevasOperaciones.Fecha = vlrFecha;
}




// const agregarNuevaOp = (operaciones) => {
//         const operacionDiv = document.createElement('div');
//         operacionDiv.classList.add('columns', 'is-8');
//         operacionDiv.innerHTML = `
//             <div class="column is-flex is-justify-content-space-evenly">
//                 <section class="is-flex-direction-column">
//                     <h2>Descripción</h2>
//                     <p class="mt-6">${operaciones.descripcion}</p> 
//                 </section>
//                 <section class="is-flex-direction-column">
//                     <h2>Categoria</h2>
//                     <p class="mt-6">${operaciones.categoria}</p> 
//                 </section>
//                 <section class="is-flex-direction-column">
//                     <h2>Fecha</h2>
//                     <p class="mt-6"></p> 
//                 </section>
//                 <section class="is-flex-direction-column">
//                     <h2>Monto</h2>
//                     <p class="mt-6">${operaciones.monto}</p> 
//                 </section>
//             </div>`;

        
//         $('agregado-op').appendChild(operacionDiv);
//     ;
// }



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