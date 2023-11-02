import React, { useState } from 'react'
import Card from "./componentes/Card";

function App() {
  const [validacion, setValidacion] = useState(false)
  const [color, setColor] = useState("")
  const [animal, setAnimal] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    setValidacion(false);

    if (color.length < 3 | color[0].includes(" ") | animal.length < 6){
      alert("Por favor chequea que la información sea correcta");
    } else {
      setValidacion(true);
    }
  }

  return (
    <div className="App">
      <h1>Escribe un color y un animal</h1>
      <form onSubmit={handleSubmit}>
        <label>Color: </label>
        <input
          type='text'
          placeholder='Ej: Verde'
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <label>Animal: </label>
        <input
          type='text'
          placeholder='Ej: Aguila'
          value={animal}
          onChange={e => setAnimal(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <Card clr={validacion ? color :''} animal={validacion ? animal :''} />
    </div>
  );
}

export default App;