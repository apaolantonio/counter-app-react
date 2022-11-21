import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-strings", () => {
  test('getSaludo debe retornar "Hola Agustin"', () => {
    const name = "Agustin";
    const msg = getSaludo(name);

    expect(msg).toBe("Hola Agustin");
  });
});
