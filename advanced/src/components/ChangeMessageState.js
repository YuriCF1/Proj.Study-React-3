import React from "react";

const ChangeMessageState = ({ changeFunction }) => { //Isso aqui é passado no App como a função lá definida por handleMessage
  const messages = ["Oi", "Olá", "Tudo bem?", "Oi, tudo bem?"];

  return <div>
    <button onClick={() => changeFunction(messages[0])}>Muda a mensagem</button>
    <button onClick={() => changeFunction(messages[1])}>Muda a mensagem</button>
    <button onClick={() => changeFunction(messages[2])}>Muda a mensagem</button>
  </div>;
};

export default ChangeMessageState;
