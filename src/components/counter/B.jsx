import useCounter from "../../hooks/useCounter";

const B = () => {
  const {count, decrement } = useCounter(5);


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Dec</button>

    </div>
  );
};

export default B;
