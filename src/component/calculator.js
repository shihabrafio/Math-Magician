import './calculator.css';
import Num from './number';
import Operators from './operator';

const Calculator = () => (
  <div className="container">
    <article className="calculator">
      <div className="zero">0</div>
      <Operators />
      <Num />
    </article>
  </div>
);

export default Calculator;
