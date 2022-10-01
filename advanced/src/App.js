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
  const [userName] = useState("Ygor ");

  const cars = [
    {
      id: 1,
      brand: "Lamborguini",
      color: "Preta",
      KM: 0,
      newCar: true,
    },
    {
      id: 2,
      brand: "Masserati",
      color: "Laranja",
      KM: 100,
      newCar: true,
    },
    {
      id: 1,
      brand: "Dodge",
      color: "Preta",
      KM: 250,
      newCar: true,
    },
  ];
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
      <CarDetail brand="Ford" km={1000} color="Azul" new={false} />
      {/* Reaproveitando */}
      <CarDetail brand="Audi" km={500} color="Branco" new={false} />
      <CarDetail color="Roxo" km={700} brand="Fiat" newCar={true} />
      {/* Loop em array de objetos */}
      {/* Lembrando que objeto se passa com parenteses */}
      {/* Os loops são feitos com .map */}
      {cars.map((car) => (
        <CarDetail brand={car.brand} color={car.color} newCar={car.newCar}/>
      ))}
    </div>
  );
}

export default App;
