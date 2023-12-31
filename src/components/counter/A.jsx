import useCounter from "../../hooks/useCounter";

const A = () => {
  const {count, increment } = useCounter(5);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Inc</button>
    </>
  );
};

export default A;
