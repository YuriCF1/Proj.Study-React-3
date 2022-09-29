import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Yuri", "Diego", "Bill"]);
  const [users, setUsers] = useState([
    // { id: 312321, name: "Matheus", age: 31 },
    // { id: 23123, name: "João", age: 28 },
    // { id: 41243, name: "Pedro", age: 44 },
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "João", age: 28 },
    { id: 3, name: "Pedro", age: 44 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4); //Número de itens da lista
    setUsers((prevUsers) => {
      //prevSate é o estado atual, após o método, vira o estado anterior
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {/* Normalmente, a expressão de map seria com chave {}, mas já que JSX é visto como objeto, então quando se retorna objeto no map, é com parentess () */}
        {/* Base das listas no react: Array, map, retorno */}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* Em projetos reais, normalmente cada item vem com um ID desse jeito */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
