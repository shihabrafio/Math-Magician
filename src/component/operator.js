const Operators = () => (
  <div className="operator">
    {['÷', '*', '-', '+', '='].map((op) => (
      <div className="button" key={op}>
        {op}
      </div>
    ))}
  </div>
);
export default Operators;
