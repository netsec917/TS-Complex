import {complex} from '../complex';

test('Construction', () => {
  let x = new complex(3, 7);
    expect(x.real).toBe(3);
    expect(x.imaginary).toBe(7);
});

test('Addition', () => {
  let x = new complex(3, 7);
  let y = new complex(2, 5);
  x = x.add(y);

  expect(x.real).toBe(5);
  expect(x.imaginary).toBe(12);
});

test('Subtraction', () => {
  let x = new complex(3, 7);
  let y = new complex(2, 5);

  x = x.subtract(y);
  expect(x.real).toBe(1);
  expect(x.imaginary).toBe(2);
});

test('Multiplication', () => {
  let x = new complex(3, 7);
  let y = new complex(2, 5);

  x = x.multiply(y);
  expect(x.real).toBe(-29);
  expect(x.imaginary).toBe(29);
});

test('Division', () => {
  let x = new complex(3, 7);
  let y = new complex(2, 5);

  x = x.divide(y);
  expect(x.real).toBeCloseTo(1.413);
  expect(x.imaginary).toBeCloseTo(-0.034);
});

test('Scalar Multiplication', () => {
  let x = new complex(3, 7);

  x = x.scalarMultiply(2);
  expect(x.real).toBe(6);
  expect(x.imaginary).toBe(14);

  x = x.scalarMultiply(0.5);
  expect(x.real).toBe(3);
  expect(x.imaginary).toBe(7);
});

test('Magnitude', () => {
  let x = new complex(3, 7);
  let mag = x.magnitude();
  expect(x.magnitude()).toBeCloseTo(7.615);
});

test('Conjugate', () => {
  let x = new complex(3, 7);
  let xBar = x.conjugate();
  expect(xBar.real).toBe(3);
  expect(xBar.imaginary).toBe(-7);
});

test('fromPolarRadians', () => {
  // in radians
  let theta = 2.00;
  let magnitude = 5.00;
  let x = complex.fromPolar(theta, magnitude);
  expect(x.real).toBeCloseTo(-2.08);
  expect(x.imaginary).toBeCloseTo(4.55);
});