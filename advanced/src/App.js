import { useState } from "react";
import "./App.css";

//Img
import Rio from "./assets/rio.jpg";
import CarDetail from "./components/CarDetail";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
  const name = "Yago";
  const [userName] = useState("Ygor ")
  return (
    <div className="App">
      <h1>Avançando</h1>
      <div>
        {/* Na pasta public, eu posso acessar os arquivos só usando a barra / */}
        <img src="/toronto.jfif" alt="Toronto" />
      </div>
      <div>
        {/* Porém,  normalmente fica na pasta assets dentro de src. Tem que importar la em cima */}
        <img src={Rio} alt="" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      {/* Passando dados do element pai para o filho */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      {/* Número sem ser texto, usa chaves */}
      <CarDetail brand="Ford" km={1000} color="Azul"/>
    </div>
  );
}

export default App;
