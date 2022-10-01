import React from "react";

const CarDetail = ({ brand, km, color, newCar }) => {
  //Respeitar a ordem(acho q não) e os valores
  return (
    <div>
      <h1>Detalhes do carro</h1>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor : {color}</li>
      </ul>
      {/* Condicional, exemplo de aproveitamento */}
      {newCar && <h5>Este carro é novo</h5>}
    </div>
  );
};

export default CarDetail;
