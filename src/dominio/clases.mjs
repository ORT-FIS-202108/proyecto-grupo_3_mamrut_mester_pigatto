

// export default class Pelicula {

//   constructor(titulo, genero, anio) {
//     this.titulo = titulo;
//     this.genero = genero;
//     this.setAnio(anio);
//   }

//   setAnio(anio) {
//     if (anio >= MIN_ANIO && anio <= MAX_ANIO) {
//       this.anio = anio;
//     } else {
//       throw new Error(`El año ingresado es incorrecto. La pelicula debe ser de los años entre ${MIN_ANIO} y ${MAX_ANIO}`);
//     }
//   }
// }

export class Gasto {
  constructor(fecha, concepto, monto, descrip, medioPago, cantPagos, repetir) {
    this.fecha = fecha;
    this.concepto = concepto;
    this.monto = monto;
    this.descrip = descrip;
    this.medioPago = medioPago;
    this.cantPagos = cantPagos;
    this.repetir = repetir;
  }
}

export class Ingreso {
  constructor(fecha, concepto, monto, moneda, descrip, medioPago) {
    this.fecha = fecha;
    this.concepto = concepto;
    this.monto = monto;
    this.moneda = moneda;
    this.descrip = descrip;
    this.medioPago = medioPago;
  }
}

export class Recordatorio {
  constructor(fecha, recordatorio) {
    this.fecha = fecha;
    this.recordatorio = recordatorio;
  }
}

export class MedioDePago {
  constructor(nombre, pagoEnCuotas) {
    this.nombre = nombre;
    this.pagoEnCuotas = pagoEnCuotas;
  }
}

export class Concepto {
  constructor(nombre, topeMensual) {
    this.nombre = nombre;
    this.topeMensual = topeMensual;
  }
}

// export default class Sistema {
//   constructor() {
//     this.gastos = []
//     this.ingresos = []
//     this.recordatorios = []
//     this.mediosDePago = []
//     this.conceptos = []
//   }

//   agregarGasto(gasto) {
//     this.gastos.push(gasto);
//   }

//   agregarIngreso(ingreso) {
//     this.ingresos.push(ingreso);
//   }

//   agregarRecordatorio(recordatorio) {
//     this.recordatorios.push(recordatorio);
//   }

//   agregarMedioDePago(medioDePago) {
//     this.mediosDePago.push(medioDePago);
//   }

//   agregarConcepto(concepto) {
//     this.conceptos.push(concepto);
//   }

//   ordenarGastosPorFecha() {
//     this.gastos.sort(function (g1, g2) { return g1.fecha - g2.fecha });
//   }

//   //Hacer funciones para ordenar ingresos y recordatorios cuando veamos que funciona la de gasto

// }
