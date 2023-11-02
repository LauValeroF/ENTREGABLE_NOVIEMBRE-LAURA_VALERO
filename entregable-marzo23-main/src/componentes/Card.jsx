//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react'


function Card({nombre, animalFavorito}) {
  return (
    <div>
      <h2>Tarjeta</h2>
      <p>Nombre: {nombre}</p>
      <p>Animal favorito: {animalFavorito}</p>
    </div>
  );
}

export default Card;
