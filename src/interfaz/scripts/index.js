import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCDrawer} from "@material/drawer";
import { MDCSnackbar } from '@material/snackbar';
import { Sistema } from '../../dominio/sistema.mjs';
import { Gasto, Ingreso, Recordatorio, MedioDePago, Concepto } from '../../dominio/clases.mjs';

//const listaPeliculas = new ListaPeliculas();
const s = new Sistema();

// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);
// const menuLateral = document.getElementById('app-bar');
// const topAppBar = new MDCTopAppBar(menuLateral);
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

// --------------------ABRIR Y CERRAR MENU LATERAL-----------------------

// La funcionalidad no funciona por lo que se reporto issue correspondiente (#46)

const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.main-content');

listEl.addEventListener('click', (event) => {
  mainContentEl.querySelector('input, button').focus();
});

document.body.addEventListener('MDCDrawer:closed', () => {
  mainContentEl.querySelector('input, button').focus();
});

topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

// ------------------------------------------------------------------------

// const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
// tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
//   document.querySelectorAll(".content").forEach((element, index) => {
//     if (index === activatedEvent.detail.index) {
//       element.classList.remove("sample-content--hidden");
//     } else {
//       element.classList.add("sample-content--hidden");
//     }
//   });
// });
// const textFieldTitle = new MDCTextField(document.getElementById('title'));
// const textFieldYear = new MDCTextField(document.getElementById('year'));
// const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

// --------------------VARIABLES GASTOS-----------------------

const textFieldFecha = new MDCTextField(document.getElementById('fecha'));
const textFieldPagos = new MDCTextField(document.getElementById('pagos'));
const textFieldTotal = new MDCTextField(document.getElementById('total'));
const textFieldDescripcion = new MDCTextField(document.getElementById('descripcion'));
const selectConcepto = new MDCSelect(document.getElementById('concepto'));
const selectMediosDePago = new MDCSelect(document.getElementById('mediosDePago'));
const selectRepetirMensualmente = new MDCSelect(document.getElementById('repetirMensualmente'));

const addButtonGastos = new MDCRipple(document.getElementById('addButtonGastos'));

// --------------------VARIABLES INGRESOS-----------------------

const textFieldFechaIngreso = new MDCTextField(document.getElementById('fechaIngreso'));
const textFieldTotalIngreso = new MDCTextField(document.getElementById('totalIngreso'));
const textFieldDescripcionIngreso = new MDCTextField(document.getElementById('descripcionIngreso'));
const selectConceptoIngreso = new MDCSelect(document.getElementById('conceptoIngreso'));
const selectMediosDePagoIngreso = new MDCSelect(document.getElementById('mediosDePagoIngreso'));

const addButtonIngreso = new MDCRipple(document.getElementById('addButtonIngreso'));

// --------------------VARIABLES RECORDATORIOS-----------------------

const textFieldFechaRecordatorio = new MDCTextField(document.getElementById('fechaRecordatorio'));
const textFieldRecordatorio = new MDCTextField(document.getElementById('recordatorio'));

const addButtonRecordatorio = new MDCRipple(document.getElementById('addButtonRecordatorio'));

// --------------------VARIABLES MEDIOS DE PAGO----------------------

const textFieldNombreMedioDePago = new MDCTextField(document.getElementById('nombreMedioDePago'));
const selectAdmitePagos = new MDCSelect(document.getElementById('admitePagos'));

const addButtonMedioDePago = new MDCRipple(document.getElementById('addButtonMedioDePago'));

// --------------------VARIABLES CONCEPTOS-----------------------

const textFieldNombreConcepto = new MDCTextField(document.getElementById('nombreConcepto'));
const textFieldTopeMensual = new MDCTextField(document.getElementById('topeMensual'));

const addButtonConcepto = new MDCRipple(document.getElementById('addButtonConcepto'));

// --------------------VARIABLES LISTADO GASTOS-----------------------

//Ver bien como hacer para generar un boton por elemento de la lista que se crea
//ver si esto es necesario, si no borrar

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

// --------------------AGREGAR GASTO-----------------------
addButtonGastos.listen('click', () => { 
  let strFecha = textFieldFecha.value;
  let fecha = validarFecha(strFecha);
  let concepto = selectConcepto.value;
  let strMonto = textFieldTotal.value;
  let monto = validarMonto(strMonto);
  let descrip = textFieldDescripcion.value;
  let medioPago = selectMediosDePago.value;
  let cantPagos = textFieldPagos.value;
  let repetir = selectRepetirMensualmente.value;
  let gasto = new Gasto(fecha, concepto, monto, descrip, medioPago, cantPagos, repetir);
  if (gastoValido(gasto)) {
    s.agregarGasto(gasto);
    textFieldFecha.value = "";
    selectConcepto.value = "";
    textFieldTotal.value = "";
    textFieldDescripcion.value = "";
    selectMediosDePago.value = "";
    textFieldPagos.value = "";
    selectRepetirMensualmente.value = "";
  }
  actualizarListaGastos();
})


function gastoValido(gasto) { 
  let valido = true;
  if (gasto.concepto == "" || gasto.monto == "" || gasto.descrip == "" || gasto.medioPago == "" || gasto.cantPagos == 0 || gasto.repetir == "") {
    valido = false;
  }
  if(!valido){
    alert("Complete todos los campos");
  }
  return valido;
}

// --------------------AGREGAR INGRESO -----------------------
addButtonIngreso.listen('click', () => { 
  let strFecha = textFieldFechaIngreso.value;
  let fecha = validarFecha(strFecha);
  let concepto = selectConceptoIngreso.value;
  let strMonto = textFieldTotalIngreso.value;
  let monto = validarMonto(strMonto);
  let descrip = textFieldDescripcionIngreso.value;
  let medioPago = selectMediosDePagoIngreso.value;
  let ingreso = new Ingreso(fecha, concepto, monto, descrip, medioPago);
  if (ingresoValido(ingreso)) {
    s.agregarIngreso(ingreso);
    textFieldFechaIngreso.value = "";
    selectConceptoIngreso.value = "";
    textFieldTotalIngreso.value = "";
    textFieldDescripcionIngreso.value = "";
    selectMediosDePagoIngreso.value = "";
  }
  actualizarListaIngresos();
})

function ingresoValido(ingreso) {
  let valido = true;
  if (ingreso.concepto == "" || ingreso.monto == "" || ingreso.descrip == "" || ingreso.medioPago == "") {
    valido = false;
  }
  if(!valido){
    alert("Complete todos los campos");
  }
  return valido;
}

// --------------------AGREGAR RECORDATORIO -----------------------
addButtonRecordatorio.listen('click', () => {
  let strFecha = textFieldFechaRecordatorio.value;
  let fecha = validarFecha(strFecha);
  let texto = textFieldRecordatorio.value;
  let rec = new Recordatorio(fecha, texto);
  if (recordatorioValido(rec)) {
    s.agregarRecordatorio(rec);
    textFieldFechaRecordatorio.value = "";
    textFieldRecordatorio.value = "";
  }
})

function recordatorioValido(recordatorio) {
  let valido = true;
  if (recordatorio.recordatorio == "") {
    valido = false;
  }
  if(!valido){
    alert("Complete todos los campos");
  }
  return valido;
}

// --------------------AGREGAR MEDIO DE PAGO -----------------------
addButtonMedioDePago.listen('click', () => {
  let nombre = textFieldNombreMedioDePago.value;
  let pagoEnCuotas = selectAdmitePagos.value;
  let medioDePago = new MedioDePago(nombre, pagoEnCuotas);
  if (medioDePagoValido(medioDePago)) {
    s.agregarMedioDePago(medioDePago);
    textFieldNombreMedioDePago.value = "";
    selectAdmitePagos.value = "";
  }
})

function medioDePagoValido(medioDePago) {
  let valido = true;
  if (medioDePago.nombre == "" || medioDePago.pagoEnCuotas == "") {
    valido = false;
  }
  if(!valido){
    alert("Complete todos los campos");
  }
  return valido;
}

// --------------------AGREGAR CONCEPTO -----------------------
addButtonConcepto.listen('click', () => {
  let nombre = textFieldNombreConcepto.value;
  let strMonto = textFieldTopeMensual.value;
  let topeMensual = validarMonto(strMonto);
  let concepto = new Concepto(nombre, topeMensual);
  if (conceptoValido(concepto)) {
    s.agregarConcepto(concepto);
    textFieldNombreConcepto.value = "";
    textFieldTopeMensual.value = "";
  }
})

function conceptoValido(concepto) {
  let valido = true;
  if (concepto.nombre == "" || concepto.topeMensual == "") {
    valido = false;
  }
  if(!valido){
    alert("Complete todos los campos");
  }
  return valido;
}

function validarMonto(strMonto){ //que sea un número no negativo
  let monto = null;
  try{
    monto = parseInt(strMonto);
  }
  catch{
    alert("Ingrese un monto válido");
  }
  if(monto<=0){
    alert("Ingrese un monto válido");
  }
  else{
    return monto;
  }
}

function validarFecha(strFecha) {
  let arrayFechas = strFecha.split("/");
  let fecha;
  try {
    let dia = parseInt(arrayFechas[0]);
    let mes = parseInt(arrayFechas[1])-1;
    let ano = parseInt(arrayFechas[2]);
    fecha = new Date(ano, mes, dia);
  } catch {
    alert("Ingrese una fecha válida");
  }
  return fecha;
}

//------------------------- LISTA DE GASTOS -----------------------

function actualizarListaGastos(){
  const lista = document.getElementById('listado-gastos');
    lista.innerHTML = '';
    const listaGastos = s.gastos;
    for (let i = 0; i < listaGastos.length; i++) {
        const item = generarLi(listaGastos[i],i);
        lista.appendChild(item);
    }
}

function generarLi(gasto, pos) {
  const li = document.createElement('li');
  const span1 = document.createElement('span');
  const div1 = document.createElement('div');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const span4 = document.createElement('span');
  const btn1 = document.createElement('button');
  const div2 = document.createElement('div');
  span2.appendChild(document.createTextNode(gasto.concepto));
  span3.appendChild(document.createTextNode(gasto.descrip));
  let mes = parseInt(gasto.fecha.getMonth())+1;
  let texto = "$ " + gasto.medioPago + " - " + gasto.fecha.getDate() + "/" + gasto.fecha.getDate() + mes + "/" + gasto.fecha.getFullYear();  
  span4.appendChild(document.createTextNode(texto));
  btn1.appendChild(document.createTextNode("delete"));
  btn1.setAttribute('item', pos);  
  span1.className = 'mdc-list-item__ripple';
  span2.className = 'titulo-item-listado-text mdc-list-item__text';
  span3.className = 'item-listado-text mdc-list-item__text';
  span4.className = 'item-listado-text mdc-list-item__text';
  btn1.className = 'mdc-icon-button material-icons';
  div1.className = 'titulo-item-listado';
  div2.className = 'mdc-icon-button__ripple';
  borrarGasto(btn1);
  li.appendChild(span1);
  div1.appendChild(span2);
  div1.appendChild(span3);
  div1.appendChild(span4);
  btn1.appendChild(div2);
  li.appendChild(div1);
  li.appendChild(btn1);
  li.className = 'item-listado mdc-list-item';
  return li;
}

function borrarGasto(btn) {
  btn.addEventListener('click', () => {
      const itemLista = btn.getAttribute('item');
      s.borrarElemento(s.gastos,itemLista);
      actualizarListaGastos();
  });
}

//------------------------- LISTA DE INGRESOS -----------------------

function actualizarListaIngresos(){
  const lista = document.getElementById('listado-ingresos');
    lista.innerHTML = '';
    const listaIngresos = s.ingresos;
    for (let i = 0; i < listaIngresos.length; i++) {
        const item = generarLiIngresos(listaIngresos[i],i);
        lista.appendChild(item);
    }
}

function generarLiIngresos(ingreso, pos) {
  const li = document.createElement('li');
  const span1 = document.createElement('span');
  const div1 = document.createElement('div');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const span4 = document.createElement('span');
  const btn1 = document.createElement('button');
  const div2 = document.createElement('div');
  span2.appendChild(document.createTextNode(ingreso.concepto));
  span3.appendChild(document.createTextNode(ingreso.descrip));
  let mes = parseInt(ingreso.fecha.getMonth())+1;
  let texto = "$ " + ingreso.medioPago + " - " + ingreso.fecha.getDate() + "/" + ingreso.fecha.getDate() + mes + "/" + ingreso.fecha.getFullYear();  
  span4.appendChild(document.createTextNode(texto));
  btn1.appendChild(document.createTextNode("delete"));
  btn1.setAttribute('item', pos);  
  span1.className = 'mdc-list-item__ripple';
  span2.className = 'titulo-item-listado-text mdc-list-item__text';
  span3.className = 'item-listado-text mdc-list-item__text';
  span4.className = 'item-listado-text mdc-list-item__text';
  btn1.className = 'mdc-icon-button material-icons';
  div1.className = 'titulo-item-listado';
  div2.className = 'mdc-icon-button__ripple';
  borrarIngreso(btn1);
  li.appendChild(span1);
  div1.appendChild(span2);
  div1.appendChild(span3);
  div1.appendChild(span4);
  btn1.appendChild(div2);
  li.appendChild(div1);
  li.appendChild(btn1);
  li.className = 'item-listado mdc-list-item';
  return li;
}

function borrarIngreso(btn) {
  btn.addEventListener('click', () => {
      const itemLista = btn.getAttribute('item');
      s.borrarElemento(s.ingresos,itemLista);
      actualizarListaIngresos();
  });
}
