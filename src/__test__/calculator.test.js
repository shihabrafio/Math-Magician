import { render } from '@testing-library/react';
import Calculator from '../component/calculator';

describe('Confirming the display of calculator', () => {
  it('calculator displays', () => {
    const calculatorDisplay = render(<Calculator />);
    expect(calculatorDisplay).toMatchSnapshot();
  });
});