import React, { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(someData);
  
  // setNumber = (a) => {
  //   return someData + a;
  // }
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => console.log("s")}>Somando</button>
      <p>Valor com state: {number}</p>
      <button onClick={() => setNumber(5)}>Somando</button>
    </div>
  );
}; 

export default ManageData;
