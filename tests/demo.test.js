test("Esta prueba no debe fallar", () => {
  const msg1 = "Hola Mundo";
  const msg2 = msg1.trim();

  expect(msg1).toBe(msg2);
});
