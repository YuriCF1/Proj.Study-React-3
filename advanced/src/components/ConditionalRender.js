import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const conso = () => {
    console.log("É falso");
  };

  const [name, setName] = useState("João");
  return (
    <div>
      <h3>Isso embaixo, será exibido?</h3>
      {x && <p>Se X for 'true', sim!</p>}
      {!x && <p>Se X for 'false', sim!</p>}
      {!x && conso()}
      <h2>If Ternário</h2>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O não é João</p>
        </div>
      )}
      <button onClick={() => setName('Yuri')}>Mudando o nome</button>
    </div>
  );
};

export default ConditionalRender;
