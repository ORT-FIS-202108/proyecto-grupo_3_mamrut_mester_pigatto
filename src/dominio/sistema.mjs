export class Sistema {
  constructor() {
    this.gastos = [];
    this.ingresos = [];
    this.recordatorios = [];
    this.mediosDePago = [];
    this.conceptos = [];
    this.conceptosGasto = [];
    this.conceptosIngreso = [];
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
    if (concepto.tipo == 'Gasto') {
      this.conceptosGasto.push(concepto);
    } else {
      this.conceptosIngreso.push(concepto);
    }
  }

  ordenarGastosPorFecha() { // Ordena de mas recientes a mas antiguos
    this.gastos.sort(function(g1, g2) {
      return g2.fecha - g1.fecha;
    });
  }

  ordenarIngresosPorFecha() { // Ordena de mas recientes a mas antiguos
    this.ingresos.sort(function(g1, g2) {
      return g2.fecha - g1.fecha;
    });
  }

  ordenarRecordatoriosPorFecha() { // Ordena de mas recientes a mas antiguos
    this.recordatorios.sort(function(g1, g2) {
      return g2.fecha - g1.fecha;
    });
  }

  borrarElemento(lista, pos) {
    lista.splice(pos, 1);
  }

  totalIngresos() {
    let total = 0;
    for (let i = 0; i < (this.ingresos).length; i++) {
      total += this.ingresos[i].monto;
    }
    return total;
  }

  totalGastos() {
    let total = 0;
    for (let i = 0; i < (this.gastos).length; i++) {
      total += this.gastos[i].monto;
    }
    return total;
  }

  ingresosPorConceptos() {
    const lista = new Array(this.conceptosIngreso.length);
    for (let i = 0; i < lista.length; i++) {
      lista[i]=0;
    }
    for (let i = 0; i < this.conceptosIngreso.length; i++) {
      for (let l = 0; l < this.ingresos.length; l++) {
        if (this.ingresos[l].concepto === this.conceptosIngreso[i].nombre) {
          lista[i] += this.ingresos[l].monto;
        }
      }
    }
    return lista;
  }

  gastosPorConceptos() {
    const lista = new Array(this.conceptosGasto.length);
    for (let i = 0; i < lista.length; i++) {
      lista[i]=0;
    }
    for (let i = 0; i < this.conceptosGasto.length; i++) {
      for (let l = 0; l < this.gastos.length; l++) {
        if (this.gastos[l].concepto === this.conceptosGasto[i].nombre) {
          lista[i] += this.gastos[l].monto;
        }
      }
    }
    return lista;
  }

  nombresConceptosGasto() {
    const lista = new Array(this.conceptosGasto.length);
    for (let i = 0; i < this.conceptosGasto.length; i++) {
      lista[i] = this.conceptosGasto[i].nombre;
    }
    return lista;
  }

  nombresConceptosIngreso() {
    const lista = new Array(this.conceptosIngreso.length);
    for (let i = 0; i < this.conceptosIngreso.length; i++) {
      lista[i] = this.conceptosIngreso[i].nombre;
    }
    return lista;
  }
}
