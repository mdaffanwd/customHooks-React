import React from "react";
import useFetch from "../../hooks/useFetch";

const B = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return loading ? (
    <h2 style={{color:'white'}}>Loading....</h2>
  ) : (
    <>
      <h2>Fake json user</h2>
      {data?.map((ele) => (
        <li key={ele.id} style={{ color: "lightblue" }}>
          {ele.title}
        </li>
      ))}
      ;
    </>
  );
};

export default B;
