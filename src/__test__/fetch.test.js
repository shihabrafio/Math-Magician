import { render } from '@testing-library/react';
import FetchData from '../component/fetch';

describe('Confirming display of quote', () => {
  it('quote displays', () => {
    const quoteDisplay = render(<FetchData />);
    expect(quoteDisplay).toMatchSnapshot();
  });
});