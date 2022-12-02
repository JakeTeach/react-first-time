import { useState } from 'react'
import './App.css'


function App() {
  const [totalPelis, setTotalPelis]= useState([]) //cree una variable, inicialicela con lo que tengo y solo se modifica con la función que acompaña la variable. 
  const [nombrePeli, setNombrePeli] = useState("")
  const [nombreDir, setNombreDir] = useState("")
  

  const handleSubmit=(evento)=>{ //evento es submit de enviar
    evento.preventDefault()
    const pelicula = {
      nombre: nombrePeli,
      director: nombreDir
    }
    const nuevoArray = [
      ...totalPelis,
      pelicula
    ]
    setTotalPelis(nuevoArray)
    console.log(nuevoArray);
    setNombrePeli("")
    setNombreDir("")
  }

  const deletePeli=(evento) => { //evento es click
    console.log(evento.target.value);
    const nuevoArray = totalPelis.filter((peli,index) => 
      index != evento.target.value //index iterable vs index asociado al botón eliminar de cada objeto(peli)
)
    console.log(nuevoArray);
    setTotalPelis(nuevoArray);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="peli">Pelicula</label>
        <input type="text" value={nombrePeli} onChange={(evento) => {setNombrePeli(evento.target.value)} }/>
        <label htmlFor="dir">Director</label>
        <input type="text" value={nombreDir} onChange={(evento) => {setNombreDir(evento.target.value)}}/>
        <button type="submit">Enviar</button>
      </form>
      <div>
        {totalPelis.map((peli,index)=>{
          return (
          <div>
            <p>{peli.nombre}</p>
            <p>{peli.director}</p>
            <button value={index} onClick={deletePeli}>Eliminar</button>
          </div>  
          )
        })}
      </div>
    </div>
  )
}

export default App
