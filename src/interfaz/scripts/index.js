import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import {Sistema} from '../../dominio/sistema.mjs';
import {Gasto, Ingreso, Redordatorio, MedioDePago, Concepto} from '../../dominio/clases.mjs';



//const listaPeliculas = new ListaPeliculas();
const s = new Sistema();

// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);
const menuLateral = document.getElementById('app-bar');
const topAppBar = new MDCTopAppBar(menuLateral);

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

console.log("prueba inicio");

topAppBar.listen('MDCTopAppBar:nav', () => {
  console.log("Prueba barra");
});



addButtonGastos.listen('click', () => {
    console.log("prueba");
    let fecha = textFieldFecha.value;
    let concepto = selectConcepto.value;
    let monto = textFieldTotal.value;
    let descrip = textFieldDescripcion.value;
    let medioPago = selectMediosDePago.value;
    let cantPagos = textFieldPagos.value;
    let repetir = selectRepetirMensualmente.value;
    let gasto = new Gasto(fecha, concepto, monto, descrip, medioPago, cantPagos, repetir);
    s.agregarGasto(gasto);
    console.log(s.gastos);
  
})


// const addButton = new MDCRipple(document.getElementById('addButton'));
// addButton.listen('click', () => {
//   let title = textFieldTitle.value;
//   let year = textFieldYear.value;
//   let genre = selectGenre.value;
//   try {
//     let newPelicula = new Pelicula(title, genre, year);
//     listaPeliculas.agregar(newPelicula);
//   } catch (error) {
//     const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
//     snackbar.labelText = error.message;
//     snackbar.open();
//   } finally {
//     let peliculas = listaPeliculas.getPeliculas();
//     console.log(peliculas);
//   }
// })