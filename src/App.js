import React, {Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
//import axios from 'axios';
import Footer from './components/Footer';




function App() {

// definir la categoria y noticia
const [categoria,guardarCategoria] = useState('');
const [noticias,guardarNoticias] = useState([]);
const [pais,guardarPais] = useState('ve');


  useEffect(() => {
       console.log(pais)
       console.log(categoria)
     const consultarApi = async () =>{
         const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=033e9b82c7084c7986502e7a50ea1e23`;
          const respuesta = await fetch(url);
          const noticias = await respuesta.json();
        // const noticias = await axios.get(url);
         guardarNoticias(noticias.articles);
     }


    consultarApi();
  },[categoria,pais]); 
  
 // obtener la fecha
 const fecha = new Date().getFullYear();

  return (
   <Fragment>
     <Header
      titulo = 'Noticias Nacionales e Internacionales'
     />
      <div className = 'container white'>
          <Formulario
            guardarCategoria = {guardarCategoria}
            guardarPais = {guardarPais}
          />
           <ListadoNoticias
              noticias = {noticias}
          />   
     </div> 
     <Footer
          fecha={fecha}
        />
   </Fragment>
  );
}

export default App;


