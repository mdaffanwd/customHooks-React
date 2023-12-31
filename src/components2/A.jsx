import React from "react";
import useOnline from "../utils/useOnline";
import useCounter from "../utils/useCounter";
import useFetch from "../utils/useFetch";

const A = () => {
  const { data, loading } = useFetch("https://api.github.com/users");
  return loading ? (
    <h1>Loading....</h1>
  ) : (
    <>
      <h1>Github Users</h1>
      {data?.map((ele) => (
        <li key={ele.id}>{ele.login}</li>
      ))}
    </>
  );
};

export default A;
