import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Yuri", "Diego", "Bill"]);
  const [users] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 23123, name: "João", age: 28 },
    { id: 41243, name: "Pedro", age: 44 },
  ]);
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
        {users.map( (user) => (
            <li key={user.id}>{user.name}</li>

        ))}
      </ul>
    </div>
  );
};

export default ListRender;
