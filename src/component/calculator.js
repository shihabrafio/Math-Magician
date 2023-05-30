import './calculator.css';
import Num from './number';
import Operators from './operator';

function Calculator() {
  return (
    <article className="calculator">
      <div className="zero">0</div>
      <Operators />
      <Num />
    </article>
  );
}

export default Calculator;
