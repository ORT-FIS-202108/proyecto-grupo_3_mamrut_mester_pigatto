import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
import Pelicula from '../../dominio/pelicula.mjs';

const listaPeliculas = new ListaPeliculas();

// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const menuLateral = document.getElementById('app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);
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