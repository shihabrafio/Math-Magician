import './calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Num from './number';
import Operators from './operator';

const Calculator = () => {
  const [Data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const Click = (e) => {
    const click = e.target.textContent;
    const val = calculate(Data, click);
    setData(val);
  };

  const { total, next, operation } = Data;

  return (
    <div className="container">
      <article className="calculator">
        <div className="zero">
          { next || operation || total || 0 }
          {' '}
        </div>
        <Operators cal={Click} />
        <Num num={Click} />
      </article>
    </div>
  );
};

export default Calculator;
