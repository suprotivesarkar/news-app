import React from "react";

const CountryList = (props) => {
  return (
    <div>Select Country - &nbsp;
      <button onClick={() => props.fetchData("in")}>India</button>
      <button onClick={() => props.fetchData("rs")}>Russia</button>
      <button onClick={() => props.fetchData("us")}>USA</button>
    </div>
  );
};

export default CountryList;
