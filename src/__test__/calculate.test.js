import calculate from '../logic/calculate';

describe('Test Calculate addition', () => {
  const obj = {
    total: 4,
    next: 1,
    operation: '+',
  };
  const calc = calculate(obj, '=');
  it('test for addition', () => {
    expect(calc.total).toBe('5');
  });
});

describe('Test Calculate multiply', () => {
  const obj = {
    total: 6,
    next: 2,
    operation: 'X',
  };
  const calc = calculate(obj, '=');
  it('test for division', () => {
    expect(calc.total).toBe('12');
  });
});
