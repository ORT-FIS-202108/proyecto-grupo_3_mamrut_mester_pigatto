
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
  constructor(fecha, concepto, monto, descrip, medioPago) {
    this.fecha = fecha;
    this.concepto = concepto;
    this.monto = monto;
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
  constructor(nombre, topeMensual, tipo) {
    this.nombre = nombre;
    this.topeMensual = topeMensual;
    this.tipo = tipo;
  }
}
