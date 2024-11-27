import { useState } from "react";

//Componente REACT principal, recibe por prop un array de imagenes
export default function ImageCarousel({imagenes}){

    //Variable de estado para pasar de una imagen a otra
    const[index, setIndex] = useState(0);

    /*
        Funcion para pasar a la siguiente imagen en modo circular.
        Si hemos llegado al final pasamos al principio, sino mostramos la siguiente
    */
    function siguienteImagen(){
        if(index === imagenes.length-1){
            setIndex(0);
        }else{
            setIndex(index+1)
        }
    }

    /*
        Funcion para pasar a la imagen anterior en modo circular.
        Si hemos llegado al principio pasamos al final, sino mostramos la anterior
    */
    function imagenAnterior(){
        if(index === 0){
            setIndex(imagenes.length-1);
        }else{
            setIndex(index-1);
        }
    }

    //Variable para saber en que imagen estamos
    let imagenActual = imagenes[index];

    //Mostramos la imagen actual con su titulo y los botones correspondientes
    return(
        <>
            <h4><i>{imagenActual.name}</i></h4>
            <img src={imagenActual.src} alt={imagenActual.alt}/>
            <br></br>
            <button onClick={imagenAnterior}>Anterior</button>
            <button onClick={siguienteImagen}>Siguiente</button>
        </>
    )
}