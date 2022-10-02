import React from "react";

const Fragments = ({propFragment}) => {
  return (
    <>
      <h2>Fazendo isso sem tag pai</h2>
      <h3>{propFragment}</h3>
    </>
  );
};

export default Fragments;
