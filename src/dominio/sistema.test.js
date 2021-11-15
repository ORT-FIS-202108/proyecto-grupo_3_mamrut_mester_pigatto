import Sistema from './sistema.mjs';


test('creación de un sistema', () => {
    let unSistema = new Sistema();
    expect(unSistema.gastos).toBe([]);
    expect(unSistema.ingresos).toBe([]);
    expect(unSistema.recordatorios).toBe([]);
    expect(unSistema.mediosDePago).toBe([]);
    expect(unSistema.conceptos).toBe([]);
  });