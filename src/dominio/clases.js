
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

  }
}
