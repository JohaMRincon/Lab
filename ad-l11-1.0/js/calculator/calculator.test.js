const calculator = require("./calculator"); // Importa el módulo 'calculator' desde el archivo 'calculator.js' ubicado en el mismo directorio.

// Define una prueba que verifica si la función 'add' suma 1 y 2 correctamente.
test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3); // Espera que la llamada a 'calculator.add(1, 2)' retorne 3.
});

// Define una prueba que verifica si la función 'add' suma -4 y 8 correctamente.
test("adds -4 + 8 to equal 4", () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test("subtract 5 - 4 to equal 1", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("subtract -5 - -10 to equal 5", () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test("multiply 5 * 10 to equal 50", () => {
  expect(calculator.multiply(5, 10)).toBe(50);
});

test("multiply 6 * 10 to equal 60", () => {
  expect(calculator.multiply(6, 10)).toBe(60);
});
test("divide 60 / 10 to equal 6", () => {
  expect(calculator.divide(60, 10)).toBe(6);
});
test("divide 600 / 10 to equal 60", () => {
  expect(calculator.divide(600, 10)).toBe(60);
});
