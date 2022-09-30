import React from "react";

const CarDetail = ({ brand, km, color, newCar }) => {
  //Respeitar a ordem(acho q não) e os valores
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor : {color}</li>
      </ul>
      {/* Condicional, exemplo de aproveitamento */}
      {newCar && <h1>Este carro é novo</h1>}
    </div>
  );
};

export default CarDetail;
