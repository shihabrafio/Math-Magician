import PropTypes from 'prop-types';

const Num = ({ num }) => (
  <div className="numbers">
    {['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((number) => (
      <button type="button" onClick={num} className="button" key={number}>
        {number}
      </button>
    ))}
  </div>
);
Num.propTypes = { num: PropTypes.func.isRequired };
export default Num;
