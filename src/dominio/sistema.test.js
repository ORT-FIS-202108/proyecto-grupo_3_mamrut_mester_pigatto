import Sistema from './sistema.mjs';
import {Gasto, Ingreso, Recordatorio, MedioDePago, Concepto} from './clases.mjs';

test('Creación de un sistema', () => {
  const unSistema = new Sistema();
  expect(unSistema.gastos).toEqual([]);
  expect(unSistema.ingresos).toEqual([]);
  expect(unSistema.recordatorios).toEqual([]);
  expect(unSistema.mediosDePago).toEqual([]);
  expect(unSistema.conceptos).toEqual([]);
  expect(unSistema.conceptosGasto).toEqual([]);
  expect(unSistema.conceptosIngreso).toEqual([]);
});

test('Agregar nuevo gasto a sistema', () => {
  const unSistema = new Sistema();
  const unGasto = new Gasto('20/02/2020', 'Vestimenta', 2500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  unSistema.agregarGasto(unGasto);
  expect(unSistema.gastos).toEqual([unGasto]);
});

test('Agregar nuevo ingreso a sistema', () => {
  const unSistema = new Sistema();
  const unIngreso = new Ingreso('28/02/2020', 'Sueldo', 10500, 'Sueldo febrero', 'Efectivo');
  unSistema.agregarIngreso(unIngreso);
  expect(unSistema.ingresos).toEqual([unIngreso]);
});

test('Agregar nuevo recordatorio a sistema', () => {
  const unSistema = new Sistema();
  const unRecordatorio = new Recordatorio('28/02/2020', 'Llamar Juan');
  unSistema.agregarRecordatorio(unRecordatorio);
  expect(unSistema.recordatorios).toEqual([unRecordatorio]);
});

test('Agregar nuevo medio de pago a sistema', () => {
  const unSistema = new Sistema();
  const unMedioDePago = new MedioDePago('Debito Itau', 'No');
  unSistema.agregarMedioDePago(unMedioDePago);
  expect(unSistema.mediosDePago).toEqual([unMedioDePago]);
});

test('Agregar nuevo concepto de gasto a sistema', () => {
  const unSistema = new Sistema();
  const unConcepto = new Concepto('Mudanza', '22000', 'Gasto');
  unSistema.agregarConcepto(unConcepto);
  expect(unSistema.conceptos).toEqual([unConcepto]);
  expect(unSistema.conceptosGasto).toEqual([unConcepto]);
});

test('Agregar nuevo concepto de ingreso a sistema', () => {
  const unSistema = new Sistema();
  const unConcepto = new Concepto('Sueldo', '22000', 'Ingreso');
  unSistema.agregarConcepto(unConcepto);
  expect(unSistema.conceptos).toEqual([unConcepto]);
  expect(unSistema.conceptosIngreso).toEqual([unConcepto]);
});

test('Ordenar gastos por fecha', () => {
  const unSistema = new Sistema();
  const gasto1 = new Gasto('20/01/2020', 'Vestimenta', 2500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  const gasto2 = new Gasto('20/02/2021', 'Vestimenta', 2500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  unSistema.agregarGasto(gasto1);
  unSistema.agregarGasto(gasto2);
  unSistema.ordenarGastosPorFecha();
  expect(unSistema.gastos).toEqual([gasto2, gasto1]);
});

test('Ordenar ingresos por fecha', () => {
  const unSistema = new Sistema();
  const ingreso1 = new Ingreso('28/02/2020', 'Sueldo', 10500, 'Sueldo febrero', 'Efectivo');
  const ingreso2 = new Ingreso('28/02/2021', 'Sueldo', 10500, 'Sueldo febrero', 'Efectivo');
  unSistema.agregarIngreso(ingreso1);
  unSistema.agregarIngreso(ingreso2);
  unSistema.ordenarIngresosPorFecha();
  expect(unSistema.ingresos).toEqual([ingreso2, ingreso1]);
});

test('Ordenar recordatorios por fecha', () => {
  const unSistema = new Sistema();
  const recordatorio1 = new Recordatorio('28/02/2020', 'Llamar Juan');
  const recordatorio2 = new Recordatorio('28/02/2021', 'Llamar Juan');
  unSistema.agregarRecordatorio(recordatorio1);
  unSistema.agregarRecordatorio(recordatorio2);
  unSistema.ordenarRecordatoriosPorFecha();
  expect(unSistema.recordatorios).toEqual([recordatorio1, recordatorio2]);
});

test('Borrar elemento lista', () => {
  const unSistema = new Sistema();
  const recordatorio1 = new Recordatorio('28/02/2020', 'Llamar Juan');
  const recordatorio2 = new Recordatorio('28/02/2021', 'Llamar Juan');
  unSistema.agregarRecordatorio(recordatorio1);
  unSistema.agregarRecordatorio(recordatorio2);
  unSistema.borrarElemento(unSistema.recordatorios, 1);
  expect(unSistema.recordatorios).toEqual([recordatorio1]);
});

test('Borrar elemento lista pasando como parámetro una posición que no existe', () => {
  const unSistema = new Sistema();
  const recordatorio1 = new Recordatorio('28/02/2020', 'Llamar Juan');
  const recordatorio2 = new Recordatorio('28/02/2021', 'Llamar Juan');
  unSistema.agregarRecordatorio(recordatorio1);
  unSistema.agregarRecordatorio(recordatorio2);
  unSistema.borrarElemento(unSistema.recordatorios, 2);
  expect(unSistema.recordatorios).toEqual([recordatorio1, recordatorio2]);
});

test('Calcular total ingresos', () => {
  const unSistema = new Sistema();
  const ingreso1 = new Ingreso('28/01/2020', 'Sueldo', 7500, 'Sueldo enero', 'Efectivo');
  const ingreso2 = new Ingreso('28/02/2021', 'Sueldo', 10500, 'Sueldo febrero', 'Efectivo');
  unSistema.agregarIngreso(ingreso1);
  unSistema.agregarIngreso(ingreso2);
  expect(unSistema.totalIngresos()).toBe(18000);
});

test('Calcular total ingresos cuando no hay ingresos', () => {
  const unSistema = new Sistema();
  expect(unSistema.totalIngresos()).toBe(0);
});

test('Calcular total gastos', () => {
  const unSistema = new Sistema();
  const gasto1 = new Gasto('20/01/2020', 'Vestimenta', 5500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  const gasto2 = new Gasto('20/02/2021', 'Vestimenta', 2500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  unSistema.agregarGasto(gasto1);
  unSistema.agregarGasto(gasto2);
  expect(unSistema.totalGastos()).toBe(8000);
});

test('Calcular total gastos cuando no hay gastos', () => {
  const unSistema = new Sistema();
  expect(unSistema.totalGastos()).toBe(0);
});

test('Calcular ingresos por concepto', () => {
  const unSistema = new Sistema();
  const concepto1 = new Concepto('Sueldo', '22000', 'Ingreso');
  const concepto2 = new Concepto('Mudanza', '5000', 'Gasto');
  const concepto3 = new Concepto('Renta', '40000', 'Ingreso');
  unSistema.agregarConcepto(concepto1);
  unSistema.agregarConcepto(concepto2);
  unSistema.agregarConcepto(concepto3);
  const ingreso1 = new Ingreso('28/01/2020', 'Renta', 7500, 'Sueldo enero', 'Efectivo');
  const ingreso2 = new Ingreso('28/02/2021', 'Sueldo', 10500, 'Sueldo febrero', 'Efectivo');
  const ingreso3 = new Ingreso('28/02/2021', 'Renta', 10500, 'Sueldo febrero', 'Efectivo');
  unSistema.agregarIngreso(ingreso1);
  unSistema.agregarIngreso(ingreso2);
  unSistema.agregarIngreso(ingreso3);
  expect(unSistema.ingresosPorConceptos()).toEqual([10500, 18000]);
});

test('Calcular ingresos por concepto si no hay ingresos', () => {
  const unSistema = new Sistema();
  const concepto1 = new Concepto('Sueldo', '22000', 'Ingreso');
  const concepto2 = new Concepto('Mudanza', '5000', 'Gasto');
  const concepto3 = new Concepto('Renta', '40000', 'Ingreso');
  unSistema.agregarConcepto(concepto1);
  unSistema.agregarConcepto(concepto2);
  unSistema.agregarConcepto(concepto3);
  expect(unSistema.ingresosPorConceptos()).toEqual([0, 0]);
});

test('Calcular gastos por concepto', () => {
  const unSistema = new Sistema();
  const concepto1 = new Concepto('Alimentacion', '22000', 'Gasto');
  const concepto2 = new Concepto('Mudanza', '5000', 'Gasto');
  const concepto3 = new Concepto('Renta', '40000', 'Ingreso');
  unSistema.agregarConcepto(concepto1);
  unSistema.agregarConcepto(concepto2);
  unSistema.agregarConcepto(concepto3);
  const gasto1 = new Gasto('20/01/2020', 'Mudanza', 10500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  const gasto2 = new Gasto('20/02/2021', 'Alimentacion', 3500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  const gasto3 = new Gasto('20/02/2021', 'Alimentacion', 2500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  unSistema.agregarGasto(gasto1);
  unSistema.agregarGasto(gasto2);
  unSistema.agregarGasto(gasto3);
  expect(unSistema.gastosPorConceptos()).toEqual([6000, 10500]);
});

test('Calcular gastos por concepto si no hay gastos', () => {
  const unSistema = new Sistema();
  const concepto1 = new Concepto('Alimentacion', '22000', 'Gasto');
  const concepto2 = new Concepto('Mudanza', '5000', 'Gasto');
  const concepto3 = new Concepto('Renta', '40000', 'Ingreso');
  unSistema.agregarConcepto(concepto1);
  unSistema.agregarConcepto(concepto2);
  unSistema.agregarConcepto(concepto3);
  expect(unSistema.gastosPorConceptos()).toEqual([0, 0]);
});

test('Obtener lista nombres conceptos ingreso', () => {
  const unSistema = new Sistema();
  const concepto1 = new Concepto('Sueldo', '22000', 'Ingreso');
  const concepto2 = new Concepto('Mudanza', '5000', 'Gasto');
  const concepto3 = new Concepto('Renta', '40000', 'Ingreso');
  unSistema.agregarConcepto(concepto1);
  unSistema.agregarConcepto(concepto2);
  unSistema.agregarConcepto(concepto3);
  expect(unSistema.nombresConceptosIngreso()).toEqual(['Sueldo', 'Renta']);
});

test('Obtener lista nombres conceptos ingreso cuando no hay ingresos', () => {
  const unSistema = new Sistema();
  expect(unSistema.nombresConceptosIngreso()).toEqual([]);
});

test('Obtener lista nombres conceptos gasto', () => {
  const unSistema = new Sistema();
  const concepto1 = new Concepto('Alimentacion', '22000', 'Gasto');
  const concepto2 = new Concepto('Mudanza', '5000', 'Gasto');
  const concepto3 = new Concepto('Renta', '40000', 'Ingreso');
  unSistema.agregarConcepto(concepto1);
  unSistema.agregarConcepto(concepto2);
  unSistema.agregarConcepto(concepto3);
  expect(unSistema.nombresConceptosGasto()).toEqual(['Alimentacion', 'Mudanza']);
});

test('Obtener lista nombres conceptos gasto', () => {
  const unSistema = new Sistema();
  expect(unSistema.nombresConceptosGasto()).toEqual([]);
});
