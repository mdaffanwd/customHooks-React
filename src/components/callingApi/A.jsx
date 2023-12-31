import React from "react";
import useFetch from "../../hooks/useFetch";

const A = () => {
  const { data, loading } = useFetch("https://api.github.com/users");
  console.log(data);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div style={{ backgroundColor: "skyblue", color: "black" }}>
        <h2>Github Users</h2>
        {data?.map((ele) => (
          <li key={ele.id}>{ele.login}</li>
        ))}
      </div>
    </>
  );
};

export default A;
