import { useState } from "react"

// Constante para inicializar con un animal
const animalesIniciales = [
    {
        id:1,
        nombre: "Elefante",
        especie: "Mamifero",
        edad:45,
        sexo: "Hembra"
    }
]

//Como tenemos un animal empezamos el proximo id en 2
let contadorId=2;

/*
    Componente hijo Animal, va a renderizar la lista de animales uno a uno, segun se lo pasa el padre,
    para ello recibe como prop cada animal que hay en el array
*/
function Animal({animal}){
    return(
        <li>
            <p>Nombre: {animal.nombre}</p>
            <p>Especie: {animal.especie}</p>
            <p>Edad: {animal.edad}</p>
            <p>Sexo: {animal.sexo}</p>

        </li>
    )
}

//Componente REACT principal
export default function AnimalList(){
    //Varibale de estado de animales, se inicializa con lo que ya tenemos
    const[animalesEstado, setAnimalesEstado] = useState(animalesIniciales)

    //Variables de estado para los nuevos datos introducidos que van a ser guardados
    const[nuevoNombre, setNuevoNombre] = useState("")
    const[nuevaEspecie, setNuevaEspecie] = useState("")
    const[nuevaEdad, setNuevaEdad] = useState("")
    const[nuevoSexo, setNuevoSexo] = useState("")

    //Mensajes de error para cada una de las restricciones
    const[mensajeErrorNombre, setMensajeErrorNombre] = useState('')
    const[mensajeErrorEspecie, setMensajeErrorEspecie] = useState('')

    //Funcion para añadir los animales
    function AddAnimal(e){
        e.preventDefault();

        if(nuevoNombre === "" ){
            setMensajeErrorNombre("Debes completar el campo de nombre")
            setMensajeErrorEspecie("")
        }else if(nuevaEspecie === ""){
            setMensajeErrorEspecie("Debes completar el campo de especie")
            setMensajeErrorNombre("")
        }else{
            setMensajeErrorNombre("")
            setMensajeErrorEspecie("")
            setAnimalesEstado([
                ...animalesEstado,
                {
                    id:contadorId++,
                    nombre: nuevoNombre,
                    especie: nuevaEspecie,
                    edad: nuevaEdad,
                    sexo: nuevoSexo
                }
            ])
            setNuevoNombre("")
            setNuevaEspecie("")
            setNuevaEdad("")
        }
    }

    //Se muestra el formulario y la lista de animales
    return(
        <>
            <form onSubmit={AddAnimal}>
                <label>Nombre: <input type="text" value={nuevoNombre} onChange={e => setNuevoNombre(e.target.value)}></input>  </label>
                <p>{mensajeErrorNombre}</p>
                <label>Especie: <input type="text" value={nuevaEspecie} onChange={e => setNuevaEspecie(e.target.value)}></input>  </label>
                <p>{mensajeErrorEspecie}</p>
                <label>Edad: <input type="number" value={nuevaEdad} onChange={e => setNuevaEdad(e.target.value)}></input>  </label>
                <label>
                    Nombre: 
                    <select name="Selecciona una opción"> 
                        <option value={nuevoSexo}>Macho</option>
                        <option value={nuevoSexo}>Hembra</option>
                    </select>  
                </label>
                <input type="submit" value="Añadir"></input>
            </form>
            <h3>Animales registrados:</h3>
            <ul>
                {animalesEstado.map(
                    animal => <Animal animal={animal} key={animal.id}></Animal>
                )}
            </ul>
        </>

    );
}