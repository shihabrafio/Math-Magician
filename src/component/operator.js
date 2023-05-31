/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const Operators = ({ cal }) => (
  <div className="operator">
    {['÷', 'X', '-', '+', '='].map((op) => (
      <button type="button" onClick={cal} className="button" key={op}>
        {op}
      </button>
    ))}
  </div>
);
Operators.propTypes = { cal: PropTypes.func.isRequired };
export default Operators;
