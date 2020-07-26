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

test('Arguement', () => {
  let x = new complex(3, 7);
  expect(x.arg()).toBeCloseTo(Math.atan(7 / 3));
});

test('Conjugate', () => {
  let x = new complex(3, 7);
  let xBar = x.conj();
  expect(xBar.real).toBe(3);
  expect(xBar.img).toBe(-7);
});

test('Negation', () => {
  let x = new complex(3, 7);
  let xBar = x.neg();
  expect(xBar.real).toBe(-3);
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

test('toPolarRadians', () => {
  // in radians
  let x = new complex(3, 7);
  let polar = x.toPolar();
  expect(polar[0]).toBeCloseTo(x.arg());
  expect(polar[1]).toBeCloseTo(x.mag());
});

test('Exponential', () => {
  let x = new complex(3, 7);
  let y = x.exp();
  expect(y.real).toBeCloseTo(15.1425316);
  expect(y.img).toBeCloseTo(13.1959286);
});

test('Natural Logarithmic', () => {
  let x = new complex(3, 7);
  let y = x.log();
  expect(y.real).toBeCloseTo(2.03022151);
  expect(y.img).toBeCloseTo(1.16590454);
});

test('Sin', () => {
  let x = new complex(3, 7);
  let y = x.sin();
  expect(y.real).toBeCloseTo(77.3785044);
  expect(y.img).toBeCloseTo(-542.828848);
});

test('Cos', () => {
  let x = new complex(3, 7);
  let y = x.cos();
  expect(y.real).toBeCloseTo(-542.829751);
  expect(y.img).toBeCloseTo(-77.3783757);
});

test('Tan', () => {
  let x = new complex(3, 7);
  let y = x.tan();
  // expect(y.real).toBeCloseTo();
  expect(y.real).toBeCloseTo(-4.64683281e-7);
  expect(y.img).toBeCloseTo(0.999998403);
});

test('toString', () => {
  let x = new complex(3, 7);
  let y = x.toString();
  let yBar = x.conj().toString();
  let yNeg = x.neg().toString();
  // expect(y.real).toBeCloseTo();
  expect(y).toBe('3 + 7i');
  expect(yBar).toBe('3 - 7i');
  expect(yNeg).toBe('-3 - 7i');
});
