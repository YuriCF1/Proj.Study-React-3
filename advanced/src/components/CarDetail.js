import React from "react";

const CarDetail = ({ brand, km, color }) => {
  //Respeitar a ordem e os valores
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor : {color}</li>
      </ul>
    </div>
  );
};

export default CarDetail;
