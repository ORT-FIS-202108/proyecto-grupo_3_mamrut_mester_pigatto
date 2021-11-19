import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import { MDCDrawer } from "@material/drawer";
import Sistema from '../../dominio/sistema.mjs';
import { Gasto, Ingreso, Recordatorio, MedioDePago, Concepto } from '../../dominio/clases.mjs';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

document.body.style.backgroundImage = "url('../styles/images/fondo.png')";

const s = new Sistema();
ocultarFuncionesAgregar();
ocultarFuncionesListado();
ocultarResumen();
setValoresPorDefecto();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

// --------------------ABRIR Y CERRAR MENU LATERAL-----------------------

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

const btnMenuCostado = document.getElementById('btnSidebarMenu');
const sideMenu = document.getElementById('sidenav');

btnMenuCostado.addEventListener('click', () => {
  if (sideMenu.style.display == "none") {
    sideMenu.style.display = "block";
  } else {
    sideMenu.style.display = "none";
  }
});

// --------------------VOLVER AL INICIO CON BOTON SUPERIOR IZQ-----------------------

const tituloMisGastos = document.getElementById('tituloMisGastos');

tituloMisGastos.addEventListener('click', () => {
  ocultarFuncionesAgregar();
  ocultarFuncionesListado();
  ocultarResumen();

  document.getElementById('idInicio').style.display = "block";
});

//-------------------- SET VALORES PREDETERMINADOS --------------

function setValoresPorDefecto(){
  let m1 = new MedioDePago("Efectivo", "No");
  s.agregarMedioDePago(m1);
  let m2 = new MedioDePago("Débito", "No");
  s.agregarMedioDePago(m2);
  let m3 = new MedioDePago("Crédito", "Si");
  s.agregarMedioDePago(m3);

  let cG1 = new Concepto("Alimentacion", 0, "Gasto");
  s.agregarConcepto(cG1);
  let cG2 = new Concepto("Transporte", 0, "Gasto");
  s.agregarConcepto(cG2);
  let cG3 = new Concepto("Vestimenta", 0, "Gasto");
  s.agregarConcepto(cG3);
  let cI1 = new Concepto("Sueldo", 0, "Ingreso");
  s.agregarConcepto(cI1);
  let cI2 = new Concepto("Renta", 0, "Ingreso");
  s.agregarConcepto(cI2);
  let cI3 = new Concepto("Transferencias por gastos compartidos", 0, "Ingreso");
  s.agregarConcepto(cI3);
}

// --------------------BOTONES MENU LATERAL-----------------------

function ocultarInicio() {
  document.getElementById('idInicio').style.display = "none";
}

function ocultarFuncionesAgregar() {
  document.getElementById('idAgregarGasto').style.display = "none";
  document.getElementById('idAgregarIngreso').style.display = "none";
  document.getElementById('idAgregarRecordatorio').style.display = "none";
  document.getElementById('idAgregarMedioDePago').style.display = "none";
  document.getElementById('idAgregarConcepto').style.display = "none";
}


function ocultarFuncionesListado() {
  document.getElementById('idListadoGastos').style.display = "none";
  document.getElementById('idListadoIngresos').style.display = "none";
  document.getElementById('idListadoRecordatorios').style.display = "none";
  document.getElementById('idListadoMediosDePago').style.display = "none";
  document.getElementById('idListadoConceptos').style.display = "none";
}

function ocultarResumen() {
  document.getElementById('idResultados').style.display = "none";
  document.getElementById('idResumenGastos').style.display = "none";
  document.getElementById('idResumenIngresos').style.display = "none";
}

const btnMenuInicio = document.getElementById('btnMenuInicio');

btnMenuInicio.addEventListener('click', (event) => {
  ocultarFuncionesAgregar();
  ocultarFuncionesListado();
  ocultarResumen();

  document.getElementById('idInicio').style.display = "block";

});

const btnMenuGastos = document.getElementById('btnMenuGastos');

btnMenuGastos.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesAgregar();
  ocultarResumen();
  document.getElementById('idListadoIngresos').style.display = "none";
  document.getElementById('idListadoRecordatorios').style.display = "none";
  document.getElementById('idListadoMediosDePago').style.display = "none";
  document.getElementById('idListadoConceptos').style.display = "none";
  document.getElementById('idListadoGastos').style.display = "block";
});

const btnMenuIngresos = document.getElementById('btnMenuIngresos');

btnMenuIngresos.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesAgregar();
  ocultarResumen();
  document.getElementById('idListadoGastos').style.display = "none";
  document.getElementById('idListadoRecordatorios').style.display = "none";
  document.getElementById('idListadoMediosDePago').style.display = "none";
  document.getElementById('idListadoConceptos').style.display = "none";
  document.getElementById('idListadoIngresos').style.display = "block";
});

const btnMenuRecordatorios = document.getElementById('btnMenuRecordatorios');

btnMenuRecordatorios.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesAgregar();
  ocultarResumen();
  document.getElementById('idListadoGastos').style.display = "none";
  document.getElementById('idListadoIngresos').style.display = "none";
  document.getElementById('idListadoMediosDePago').style.display = "none";
  document.getElementById('idListadoConceptos').style.display = "none";
  document.getElementById('idListadoRecordatorios').style.display = "block";
});

const btnMenuMediosDePago = document.getElementById('btnMenuMediosDePago');

btnMenuMediosDePago.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesAgregar();
  ocultarResumen();
  actualizarListaMediosDePago();
  document.getElementById('idListadoGastos').style.display = "none";
  document.getElementById('idListadoIngresos').style.display = "none";
  document.getElementById('idListadoRecordatorios').style.display = "none";
  document.getElementById('idListadoConceptos').style.display = "none";
  document.getElementById('idListadoMediosDePago').style.display = "block";
});

const btnMenuConceptos = document.getElementById('btnMenuConceptos');

btnMenuConceptos.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesAgregar();
  ocultarResumen();
  actualizarListaConceptos();
  document.getElementById('idListadoGastos').style.display = "none";
  document.getElementById('idListadoIngresos').style.display = "none";
  document.getElementById('idListadoRecordatorios').style.display = "none";
  document.getElementById('idListadoMediosDePago').style.display = "none";
  document.getElementById('idListadoConceptos').style.display = "block";
});

const btnResultados = document.getElementById('btnResultados');

btnResultados.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesAgregar();
  ocultarFuncionesListado();
  setDatosResultados();
  document.getElementById('idResumenGastos').style.display = "none";
  document.getElementById('idResumenIngresos').style.display = "none";
  document.getElementById('idResultados').style.display = "block";
});

const btnResumenGastos = document.getElementById('btnResumenGastos');

btnResumenGastos.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesAgregar();
  ocultarFuncionesListado();
  setDatosGastos();
  document.getElementById('idResultados').style.display = "none";
  document.getElementById('idResumenIngresos').style.display = "none";
  document.getElementById('idResumenGastos').style.display = "block";

});

const btnResumenIngresos = document.getElementById('btnResumenIngresos');

btnResumenIngresos.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesAgregar();
  ocultarFuncionesListado();
  setDatosIngresos();
  document.getElementById('idResultados').style.display = "none";
  document.getElementById('idResumenGastos').style.display = "none";
  document.getElementById('idResumenIngresos').style.display = "block";


});

const btnCerrarSesion = document.getElementById('btnCerrarSesion');

btnCerrarSesion.addEventListener('click', (event) => {
  ocultarFuncionesAgregar();
  ocultarFuncionesListado();
  ocultarResumen();

  document.getElementById('idInicio').style.display = "block";
});

// --------------------BOTONES INICIO-----------------------

const btnInicioGasto = document.getElementById('btnInicioGasto');

btnInicioGasto.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesListado();
  ocultarResumen();
  document.getElementById('idAgregarIngreso').style.display = "none";
  document.getElementById('idAgregarRecordatorio').style.display = "none";
  document.getElementById('idAgregarMedioDePago').style.display = "none";
  document.getElementById('idAgregarConcepto').style.display = "none";

  document.getElementById('idAgregarGasto').style.display = "block";

});

const btnInicioIngreso = document.getElementById('btnInicioIngreso');

btnInicioIngreso.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesListado();
  ocultarResumen();
  document.getElementById('idAgregarGasto').style.display = "none";
  document.getElementById('idAgregarRecordatorio').style.display = "none";
  document.getElementById('idAgregarMedioDePago').style.display = "none";
  document.getElementById('idAgregarConcepto').style.display = "none";

  document.getElementById('idAgregarIngreso').style.display = "block";

});

const btnInicioRecordatorio = document.getElementById('btnInicioRecordatorio');

btnInicioRecordatorio.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesListado();
  ocultarResumen();
  document.getElementById('idAgregarGasto').style.display = "none";
  document.getElementById('idAgregarIngreso').style.display = "none";
  document.getElementById('idAgregarMedioDePago').style.display = "none";
  document.getElementById('idAgregarConcepto').style.display = "none";

  document.getElementById('idAgregarRecordatorio').style.display = "block";

});

const btnInicioMedioDePago = document.getElementById('btnInicioMedioDePago');

btnInicioMedioDePago.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesListado();
  ocultarResumen();
  document.getElementById('idAgregarGasto').style.display = "none";
  document.getElementById('idAgregarIngreso').style.display = "none";
  document.getElementById('idAgregarRecordatorio').style.display = "none";
  document.getElementById('idAgregarConcepto').style.display = "none";

  document.getElementById('idAgregarMedioDePago').style.display = "block";

});

const btnInicioConcepto = document.getElementById('btnInicioConcepto');

btnInicioConcepto.addEventListener('click', (event) => {
  ocultarInicio();
  ocultarFuncionesListado();
  ocultarResumen();
  document.getElementById('idAgregarGasto').style.display = "none";
  document.getElementById('idAgregarIngreso').style.display = "none";
  document.getElementById('idAgregarRecordatorio').style.display = "none";
  document.getElementById('idAgregarMedioDePago').style.display = "none";

  document.getElementById('idAgregarConcepto').style.display = "block";

});

// ---------------------------- GRAFICOS -------------------------------

function setDatosResultados(){
  barChart.data.datasets[0].data = [s.totalIngresos(), s.totalGastos()];
  barChart.update();
}

function setDatosGastos(){
  donutGastos.data.labels = s.nombresConceptosGasto();
  donutGastos.data.datasets[0].data = s.gastosPorConceptos();
  donutGastos.update();
}

function setDatosIngresos(){
  donutIngresos.data.labels = s.nombresConceptosIngreso();
  donutIngresos.data.datasets[0].data = s.ingresosPorConceptos();
  donutIngresos.update();
}

const barChartContext = document.getElementById('chartResultados').getContext('2d');
const barChart = new Chart(barChartContext, {
  type: 'bar',
  data: {
    labels: ['Ingresos', 'Gastos'],
    datasets: [{
      label: 'Resultados',
      data: [0,0],
      backgroundColor: [
        'rgba(72, 181, 5, 0.5)',
        'rgba(239, 93, 168, 0.5)',
      ],
      borderColor: [
        'rgba(72, 181, 5, 1)',
        'rgba(239, 93, 168, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



const donutIngresosContext = document.getElementById('donutIngresos').getContext('2d');
const donutIngresos = new Chart(donutIngresosContext, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: 'Ingresos',
      data: [0, 0, 0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const donutGastosContext = document.getElementById('donutGastos').getContext('2d');
const donutGastos = new Chart(donutGastosContext, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: 'Gastos',
      data: [0,0,0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

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
const selectTipoConcepto = new MDCSelect(document.getElementById('tipoConcepto'));

const addButtonConcepto = new MDCRipple(document.getElementById('addButtonConcepto'));

// --------------------AGREGAR GASTO-----------------------

addButtonGastos.listen('click', () => {
  if(textFieldFecha.value == "" || selectConcepto.value == "" || textFieldTotal.value == "" || textFieldDescripcion.value == "" || selectMediosDePago.value == "" || textFieldPagos.value == "" || selectRepetirMensualmente.value == ""){
    alert('Por favor, complete todos los campos');
  }
  else{
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
    s.agregarGasto(gasto);
    textFieldFecha.value = "";
    selectConcepto.value = "";
    textFieldTotal.value = "";
    textFieldDescripcion.value = "";
    selectMediosDePago.value = "";
    textFieldPagos.value = "";
    selectRepetirMensualmente.value = "";
    s.ordenarGastosPorFecha();
    actualizarListaGastos();
  }
})

// --------------------AGREGAR INGRESO -----------------------

addButtonIngreso.listen('click', () => {
  if(textFieldFechaIngreso.value == "" || selectConceptoIngreso.value == "" || textFieldTotalIngreso.value == "" || textFieldDescripcionIngreso.value == "" || selectMediosDePagoIngreso.value == ""){
    alert('Por favor, complete todos los campos');
  }else{
    let strFecha = textFieldFechaIngreso.value;
    let fecha = validarFecha(strFecha);
    let concepto = selectConceptoIngreso.value;
    let strMonto = textFieldTotalIngreso.value;
    let monto = validarMonto(strMonto);
    let descrip = textFieldDescripcionIngreso.value;
    let medioPago = selectMediosDePagoIngreso.value;
    let ingreso = new Ingreso(fecha, concepto, monto, descrip, medioPago);
    s.agregarIngreso(ingreso);
    textFieldFechaIngreso.value = "";
    selectConceptoIngreso.value = "";
    textFieldTotalIngreso.value = "";
    textFieldDescripcionIngreso.value = "";
    selectMediosDePagoIngreso.value = "";
    s.ordenarIngresosPorFecha();
    actualizarListaIngresos();
  }
})

// --------------------AGREGAR RECORDATORIO -----------------------

addButtonRecordatorio.listen('click', () => {
  if (textFieldFechaRecordatorio.value == "" || textFieldRecordatorio.value == ""){
    alert('Por favor, complete todos los campos');
  }
  else{
    let strFecha = textFieldFechaRecordatorio.value;
    let fecha = validarFecha(strFecha);
    let texto = textFieldRecordatorio.value;
    let rec = new Recordatorio(fecha, texto);
    s.agregarRecordatorio(rec);
    textFieldFechaRecordatorio.value = "";
    textFieldRecordatorio.value = "";
    s.ordenarRecordatoriosPorFecha();
    actualizarListaRecordatorios();
  }
})

// --------------------AGREGAR MEDIO DE PAGO -----------------------

addButtonMedioDePago.listen('click', () => {
  if (textFieldNombreMedioDePago.value == "" || selectAdmitePagos.value == ""){
    alert('Por favor, complete todos los campos');
  }
  let nombre = textFieldNombreMedioDePago.value;
  let pagoEnCuotas = selectAdmitePagos.value;
  let medioDePago = new MedioDePago(nombre, pagoEnCuotas);
  s.agregarMedioDePago(medioDePago);
  textFieldNombreMedioDePago.value = "";
  selectAdmitePagos.value = "";
  actualizarListaMediosDePago();
})

// --------------------AGREGAR CONCEPTO -----------------------

addButtonConcepto.listen('click', () => {
  if (textFieldNombreConcepto.value == "" || textFieldTopeMensual.value == "" || selectTipoConcepto.value == ""){
    alert('Por favor, complete todos los campos');
  }
  else{
    let nombre = textFieldNombreConcepto.value;
    let strMonto = textFieldTopeMensual.value;
    let topeMensual = validarMonto(strMonto);
    let tipo = selectTipoConcepto.value;
    let concepto = new Concepto(nombre, topeMensual, tipo);
    s.agregarConcepto(concepto);
    textFieldNombreConcepto.value = "";
    textFieldTopeMensual.value = "";
    selectTipoConcepto.value = "";
    actualizarListaConceptos();
  }
  
})

function validarMonto(strMonto) { //que sea un número no negativo
  let monto = null;
  try {
    monto = parseInt(strMonto);
  }
  catch {
    alert("Ingrese un monto válido");
  }
  if (monto <= 0) {
    alert("Ingrese un monto válido");
  }
  else {
    return monto;
  }
}

function validarFecha(strFecha) {
  let arrayFechas = strFecha.split("/");
  let fecha;
  try {
    let dia = parseInt(arrayFechas[0]);
    let mes = parseInt(arrayFechas[1]) - 1;
    let ano = parseInt(arrayFechas[2]);
    fecha = new Date(ano, mes, dia);
  } catch {
    alert("Ingrese una fecha válida");
  }
  return fecha;
}

//------------------------- LISTA DE GASTOS -----------------------

function actualizarListaGastos() {
  const lista = document.getElementById('listado-gastos');
  lista.innerHTML = '';
  const listaGastos = s.gastos;
  for (let i = 0; i < listaGastos.length; i++) {
    const item = generarLi(listaGastos[i], i);
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
  let mes = parseInt(gasto.fecha.getMonth()) + 1;
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
    s.borrarElemento(s.gastos, itemLista);
    actualizarListaGastos();
  });
}

//------------------------- LISTA DE INGRESOS -----------------------

function actualizarListaIngresos() {
  const lista = document.getElementById('listado-ingresos');
  lista.innerHTML = '';
  const listaIngresos = s.ingresos;
  for (let i = 0; i < listaIngresos.length; i++) {
    const item = generarLiIngresos(listaIngresos[i], i);
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
  let mes = parseInt(ingreso.fecha.getMonth()) + 1;
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
    s.borrarElemento(s.ingresos, itemLista);
    actualizarListaIngresos();
  });
}

//------------------------- LISTA DE RECORDATORIOS -----------------------

function actualizarListaRecordatorios() {
  const lista = document.getElementById('listado-recordatorios');
  lista.innerHTML = '';
  const listaRecordatorios = s.recordatorios;
  for (let i = 0; i < listaRecordatorios.length; i++) {
    const item = generarLiRecordatorios(listaRecordatorios[i], i);
    lista.appendChild(item);
  }
}

function generarLiRecordatorios(recordatorio, pos) {
  const li = document.createElement('li');
  const span1 = document.createElement('span');
  const div1 = document.createElement('div');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const btn1 = document.createElement('button');
  const div2 = document.createElement('div');
  span2.appendChild(document.createTextNode(recordatorio.recordatorio));
  let mes = parseInt(recordatorio.fecha.getMonth()) + 1;
  let texto = recordatorio.fecha.getDate() + "/" + recordatorio.fecha.getDate() + mes + "/" + recordatorio.fecha.getFullYear();
  span3.appendChild(document.createTextNode(texto));
  btn1.appendChild(document.createTextNode("delete"));
  btn1.setAttribute('item', pos);
  span1.className = 'mdc-list-item__ripple';
  span2.className = 'titulo-item-listado-text mdc-list-item__text';
  span3.className = 'item-listado-text mdc-list-item__text';
  btn1.className = 'mdc-icon-button material-icons';
  div1.className = 'titulo-item-listado';
  div2.className = 'mdc-icon-button__ripple';
  borrarRecordatorio(btn1);
  li.appendChild(span1);
  div1.appendChild(span2);
  div1.appendChild(span3);
  btn1.appendChild(div2);
  li.appendChild(div1);
  li.appendChild(btn1);
  li.className = 'item-listado mdc-list-item';
  return li;
}

function borrarRecordatorio(btn) {
  btn.addEventListener('click', () => {
    const itemLista = btn.getAttribute('item');
    s.borrarElemento(s.recordatorios, itemLista);
    actualizarListaRecordatorios();
  });
}

//------------------------- LISTA DE MEDIOS DE PAGO -----------------------

function actualizarListaMediosDePago() {
  const lista = document.getElementById('listado-medioDePago');
  lista.innerHTML = '';
  const listaMediosDePago = s.mediosDePago;
  for (let i = 0; i < listaMediosDePago.length; i++) {
    const item = generarLiMedioDePago(listaMediosDePago[i], i);
    lista.appendChild(item);
  }
}

function generarLiMedioDePago(medioDePago, pos) {
  const li = document.createElement('li');
  const span1 = document.createElement('span');
  const div1 = document.createElement('div');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const btn1 = document.createElement('button');
  const div2 = document.createElement('div');
  span2.appendChild(document.createTextNode(medioDePago.nombre));
  span3.appendChild(document.createTextNode(medioDePago.pagoEnCuotas + " admite pago en cuotas"));
  btn1.appendChild(document.createTextNode("delete"));
  btn1.setAttribute('item', pos);
  span1.className = 'mdc-list-item__ripple';
  span2.className = 'titulo-item-listado-text mdc-list-item__text';
  span3.className = 'item-listado-text mdc-list-item__text';
  btn1.className = 'mdc-icon-button material-icons';
  div1.className = 'titulo-item-listado';
  div2.className = 'mdc-icon-button__ripple';
  borrarMedioDePago(btn1);
  li.appendChild(span1);
  div1.appendChild(span2);
  div1.appendChild(span3);
  btn1.appendChild(div2);
  li.appendChild(div1);
  li.appendChild(btn1);
  li.className = 'item-listado mdc-list-item';
  return li;
}

function borrarMedioDePago(btn) {
  btn.addEventListener('click', () => {
    const itemLista = btn.getAttribute('item');
    s.borrarElemento(s.mediosDePago, itemLista);
    actualizarListaMediosDePago();
  });
}

//------------------------- LISTA DE CONCEPTOS -----------------------

function actualizarListaConceptos() {
  const lista = document.getElementById('listado-conceptos');
  lista.innerHTML = '';
  const listaConceptos = s.conceptos;
  for (let i = 0; i < listaConceptos.length; i++) {
    const item = generarLiConceptos(listaConceptos[i], i);
    lista.appendChild(item);
  }
}

function generarLiConceptos(concepto, pos) {
  const li = document.createElement('li');
  const span1 = document.createElement('span');
  const div1 = document.createElement('div');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const btn1 = document.createElement('button');
  const div2 = document.createElement('div');
  span2.appendChild(document.createTextNode(concepto.nombre));
  span3.appendChild(document.createTextNode("Objetivo tope mensual: " + concepto.topeMensual));
  btn1.appendChild(document.createTextNode("delete"));
  btn1.setAttribute('item', pos);
  span1.className = 'mdc-list-item__ripple';
  span2.className = 'titulo-item-listado-text mdc-list-item__text';
  span3.className = 'item-listado-text mdc-list-item__text';
  btn1.className = 'mdc-icon-button material-icons';
  div1.className = 'titulo-item-listado';
  div2.className = 'mdc-icon-button__ripple';
  borrarConcepto(btn1);
  li.appendChild(span1);
  div1.appendChild(span2);
  div1.appendChild(span3);
  btn1.appendChild(div2);
  li.appendChild(div1);
  li.appendChild(btn1);
  li.className = 'item-listado mdc-list-item';
  return li;
}

function borrarConcepto(btn) {
  btn.addEventListener('click', () => {
    const itemLista = btn.getAttribute('item');
    s.borrarElemento(s.conceptos, itemLista);
    actualizarListaConceptos();
  });
}