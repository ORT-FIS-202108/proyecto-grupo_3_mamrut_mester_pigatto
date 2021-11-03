
class Gasto {
  constructor(fecha, concepto, monto, moneda, descrip, medioPago, cantPagos, repetir) {
    this.fecha = fecha;
    this.concepto = concepto;
    this.monto = monto;
    this.moneda = moneda;
    this.descrip = descrip;
    this.medioPago = medioPago;
    this.cantPagos = cantPagos;
    this.repetir = repetir;
  }
}

class Ingreso {
  constructor(fecha, concepto, monto, moneda, descrip, medioPago) {
    this.fecha = fecha;
    this.concepto = concepto;
    this.monto = monto;
    this.moneda = moneda;
    this.descrip = descrip;
    this.medioPago = medioPago;
  }
}

class Recordatorio {
  constructor(fecha, recordatorio) {
    this.fecha = fecha;
    this.recordatorio = recordatorio;
  }
}

class MedioDePago {
  constructor(nombre, pagoEnCuotas) {
    this.nombre = nombre;
    this.pagoEnCuotas = pagoEnCuotas;
  }
}

class Concepto {
  constructor(nombre, topeMensual) {
    this.nombre = nombre;
    this.topeMensual = topeMensual;
  }
}

class Sistema {
  constructor() {
    this.gastos = []
    this.ingresos = []
    this.recordatorios = []
    this.mediosDePago = []
    this.conceptos = []
  }

  agregarGasto(gasto) {
    this.gastos.push(gasto);
  }

  agregarIngreso(ingreso) {
    this.ingresos.push(ingreso);
  }

  agregarRecordatorio(recordatorio) {
    this.recordatorios.push(recordatorio);
  }

  agregarMedioDePago(medioDePago) {
    this.mediosDePago.push(medioDePago);
  }

  agregarConcepto(concepto) {
    this.conceptos.push(concepto);
  }

  ordenarGastosPorFecha() {
    this.gastos.sort(function (g1, g2) { return g1.fecha - g2.fecha });
  }

  //Hacer funciones para ordenar ingresos y recordatorios cuando veamos que funciona la de gasto

}
