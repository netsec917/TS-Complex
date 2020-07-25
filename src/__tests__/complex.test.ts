import {complex} from '../complex';

test('Construction', () => {
  let x = new complex(3, 7);
    expect(x.real).toBe(3);
    expect(x.img).toBe(7);
});

test('Addition', () => {
  let x = new complex(3, 7);
  let y = new complex(2, 5);
  x = x.add(y);

  expect(x.real).toBe(5);
  expect(x.img).toBe(12);
});

test('Subtraction', () => {
  let x = new complex(3, 7);
  let y = new complex(2, 5);

  x = x.sub(y);
  expect(x.real).toBe(1);
  expect(x.img).toBe(2);
});

test('Multiplication', () => {
  let x = new complex(3, 7);
  let y = new complex(2, 5);

  x = x.mult(y);
  expect(x.real).toBe(-29);
  expect(x.img).toBe(29);
});

test('Division', () => {
  let x = new complex(3, 7);
  let y = new complex(2, 5);

  x = x.div(y);
  expect(x.real).toBeCloseTo(1.413);
  expect(x.img).toBeCloseTo(-0.034);
});

test('Scalar Multiplication', () => {
  let x = new complex(3, 7);

  x = x.scalarMult(2);
  expect(x.real).toBe(6);
  expect(x.img).toBe(14);

  x = x.scalarMult(0.5);
  expect(x.real).toBe(3);
  expect(x.img).toBe(7);
});

test('Magnitude', () => {
  let x = new complex(3, 7);
  let mag = x.mag();
  expect(x.mag()).toBeCloseTo(7.615);
});

test('Conjugate', () => {
  let x = new complex(3, 7);
  let xBar = x.conj();
  expect(xBar.real).toBe(3);
  expect(xBar.img).toBe(-7);
});

test('fromPolarRadians', () => {
  // in radians
  let theta = 2.00;
  let magnitude = 5.00;
  let x = complex.fromPolar(theta, magnitude);
  expect(x.real).toBeCloseTo(-2.08);
  expect(x.img).toBeCloseTo(4.55);
});

test('Exponential', () => {
  let x = new complex(3, 7);
  let y = x.exp();
  expect(y.real).toBeCloseTo(15.1425316);
  expect(y.img).toBeCloseTo(13.1959286);
});

test('Arguement', () => {
  let x = new complex(3, 7);
  expect(x.arg()).toBeCloseTo(Math.atan(7 / 3));
});

test('Sin', () => {
  let x = new complex(3, 7);
  let y = x.sin();
  expect(y.real).toBeCloseTo(77.3785044);
  expect(y.img).toBeCloseTo(542.828848);
});

test('Cos', () => {
  let x = new complex(3, 7);
  let y = x.cos();
  expect(y.real).toBeCloseTo(-542.829751);
  expect(y.img).toBeCloseTo(-77.3783757);
});