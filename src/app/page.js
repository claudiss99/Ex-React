'use client';
import AnimalList from "./AnimalList";
import ImageCarousel from "./ImageCarousel";
import Library from "./Library";

export default function Home() {
  return (
    <>
      <h1>Ejercicio 1</h1>
      <AnimalList/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 2</h1>
      <ImageCarousel imagenes={[
        {name:'En el muelle', src: 'https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?ga=GA1.1.360803622.1728902736', alt: 'Imagen 1'},
        {src: 'https://img.freepik.com/premium-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144125.jpg?ga=GA1.1.360803622.1728902736', alt: 'Imagen 2', name:'Al agua'},
        {src: 'https://img.freepik.com/premium-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144123.jpg?ga=GA1.1.360803622.1728902736', alt: 'Imagen 3', name:'Al cielo'},
        {src: 'https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144129.jpg?ga=GA1.1.360803622.1728902736', alt: 'Imagen 4', name:'Mojados'},
        {src: 'https://img.freepik.com/premium-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144122.jpg?ga=GA1.1.360803622.1728902736', alt: 'Imagen 5', name:'Felices'}
      ]}/>
      <h1>Ejercico 3</h1>
      <Library/>
    </>
  );
}
