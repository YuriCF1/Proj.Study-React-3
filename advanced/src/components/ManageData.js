import React, { useState } from "react";

const ManageData = () => {
  let someData = 10;
  
  let [number, setNumber] = useState(someData);

  //Mudando o estado apenas uma vez
  function calculates(n) {
    return someData + n
  }
  
  //Mudando sequencialmente
  const changeNumber = (n) => {
    setNumber((prevNumber) => {
      return prevNumber + n
    })
  }
  
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => console.log("s")}>Somando, inútil</button>
      <p>Valor com state: {number}</p>

      {/* Mudando o estado apenas uma vez */}
      <button onClick={() => setNumber(calculates(5))}>Somando 20</button>

      {/* Mudando sequencialmente */}
      <button onClick={() => changeNumber(16)}>Somando 20</button>
    </div>
  );
}; 

export default ManageData;
