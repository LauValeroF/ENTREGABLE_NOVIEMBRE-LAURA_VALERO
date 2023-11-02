import { useState } from "react";
import Card from "./componentes/Card";
import './App.css'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("")
  const [animalFavorito, setAnimalFavorito] = useState("")
  const [mostrarCard, setMostrarCard] = useState(false)
  const [error, setError] = useState('');

  const onChangeNombre = e => setNombre(e.target.value)
  const onChangeAnimalFavorito = e => setAnimalFavorito(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    if (nombre.trim().length < 3 || nombre.startsWith(' ') || animalFavorito.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setMostrarCard(false);
    } else {
      setError('');
      setMostrarCard(true);
    }
  }

  return (
    <div className="container">
      <h1>Elige un animal</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={onChangeNombre}
        />

        <input
          type="text"
          placeholder="Ingresa tu animal favorito"
          value={animalFavorito}
          onChange={onChangeAnimalFavorito}
        />

        <button>Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {mostrarCard &&(<Card nombre={nombre} animalFavorito={animalFavorito}/>)}
    </div>
  );
}

export default App;
