export class Sistema {
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

    borrarElemento(lista, pos){
      lista.splice(pos,1);
    }
  
    //Hacer funciones para ordenar ingresos y recordatorios cuando veamos que funciona la de gasto
  
  }