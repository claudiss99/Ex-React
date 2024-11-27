import { useState } from "react";

//Nuestra librería, la tenemos en este array
const books = [
    {id:1, titulo: "Los escarabajos vuelan al atardecer"},
    {id:2, titulo: "Caperucita en Manhattan"},
    {id:3, titulo: "La casa de Bernarda Alba"},
    {id:4, titulo: "La Celestina"},
    {id:5, titulo: "Los diez negritos"},
    {id:6, titulo: "Asesinato en el Orient Express"},
    {id:7, titulo: "Asesinato en el río Nilo"},
]

/*
    Nos hemos creado un componente adicional, este componente
    se renderiza por cada elemento del array libros.
    Recibe por props:
        - El objeto 'book' al completo con todos sus atributos
        - Una función 'onUpdate' que gestiona el editar
    Las funciones se definen el objeto padre, ya que es donde se crea el estado de los libros

*/
function Book({book, onUpdate}){
    //Para saber si el libro esta siendo editado
    const [isEditing, setIsEditing] = useState(false)

    let showBook;

    // Si esta siendo editados, pasamos a tener un input y el boton actualizar
    // Si no se está editando, lo mostramos tal cual
    if(isEditing){
        showBook = 
        <>
            <input value={book.titulo} onChange={ e => onUpdate(book.id, e.target.value)} />
            <button onClick={() => setIsEditing(false)}>Actualizar</button>
        </>
    }else{
        showBook = 
        <>
            <p>{book.titulo}</p>
            <button onClick={() => setIsEditing(true)}>Editar</button>
            
        </>
    }
    //Sea como sea, devolvemos lo que hay que mostrar
    return (<div >
        {showBook}
    </div>);
}

// Componente REACT principal
export default function Library(){

    //Variable de estado que almacena la lista de libros
    //Se necesita para realizar un nuevo renderizado al editar
    const [booksEstado, setBooksEstado] = useState(books);

    //Funcion que modifica el valor de la variable de estado, con lo que se haya escrito al actualizar
    function handleUpdate(bookId, tituloNuevo) {
        setBooksEstado(booksEstado.map(book =>
            {
                if(book.id === bookId){
                    return {...book, titulo: tituloNuevo}
                }else{
                    return book
                }
            }
        ))
    }
    
    //Mostramos la lista de libros con el boton editar
    return(
    <div>
        <h4>Libros</h4>
        {booksEstado.map(book => 
            <Book key={book.id} book={book} onUpdate={handleUpdate} /> 
        )}
    </div>);
}