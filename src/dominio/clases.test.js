import {
  Gasto,
  Ingreso,
  Recordatorio,
  MedioDePago,
  Concepto} from './clases.mjs';

test('creación de un gasto', () => {
  const unGasto = new Gasto('20/02/2020', 'Vestimenta', 2500, 'Compra vestido casamiento Ana', 'Efectivo', 1, 'No');
  expect(unGasto.fecha).toBe('20/02/2020');
  expect(unGasto.concepto).toBe('Vestimenta');
  expect(unGasto.monto).toBe(2500);
  expect(unGasto.descrip).toBe('Compra vestido casamiento Ana');
  expect(unGasto.medioPago).toBe('Efectivo');
  expect(unGasto.cantPagos).toBe(1);
  expect(unGasto.repetir).toBe('No');
});

test('creación de un ingreso', () => {
  const unIngreso = new Ingreso('28/02/2020', 'Sueldo', 10500, 'Sueldo febrero', 'Efectivo');
  expect(unIngreso.fecha).toBe('28/02/2020');
  expect(unIngreso.concepto).toBe('Sueldo');
  expect(unIngreso.monto).toBe(10500);
  expect(unIngreso.descrip).toBe('Sueldo febrero');
  expect(unIngreso.medioPago).toBe('Efectivo');
});

test('creación de un Recordatorio', () => {
  const unRecordatorio = new Recordatorio('28/02/2020', 'Llamar Juan');
  expect(unRecordatorio.fecha).toBe('28/02/2020');
  expect(unRecordatorio.recordatorio).toBe('Llamar Juan');
});

test('creación de un Medio de Pago', () => {
  const unMedioDePago = new MedioDePago('Debito Itau', 'No');
  expect(unMedioDePago.nombre).toBe('Debito Itau');
  expect(unMedioDePago.pagoEnCuotas).toBe('No');
});

test('creación de un Concepto', () => {
  const unConcepto = new Concepto('Mudanza', '22000');
  expect(unConcepto.nombre).toBe('Mudanza');
  expect(unConcepto.topeMensual).toBe('22000');
});
