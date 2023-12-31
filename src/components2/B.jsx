import React from "react";
import useOnline from "../utils/useOnline";
import useCounter from "../utils/useCounter";
import useFetch from "../utils/useFetch";

function B() {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos');
  console.log('from B',data);
  return (
    <>
      <h2>Fake userids</h2>
      {data && data.slice(1,20)?.map((ele)=>(
        <li type="1" key={ele.id}>{ele.title}</li>
      ))}
    </>
  );
}

export default B;
