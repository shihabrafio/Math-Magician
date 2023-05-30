const Num = () => (
  <div className="numbers">
    {['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((number) => (
      <div className="button" key={number}>
        {number}
      </div>
    ))}
  </div>
);
export default Num;
