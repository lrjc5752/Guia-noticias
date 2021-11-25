import React, {useState,Fragment} from 'react';
import imagen from './lupa.png';
import styled from '@emotion/styled';

const Imagen = styled.img`
    max-width: 10%;
    margin-top: 1rem;
    text-align: center;
`;

const usePais = (stateInicial,opciones) =>  {  // custom hook
    let verdad = true;

        const lupa = (verdad) ? <div>
            <Imagen
            src = {imagen}
            alt = 'imagen cripto'
            />
        </div>
        : null;


    // state del custom hook
    const [state,actualizarState] = useState(stateInicial);
    //console.log(state)

    const SelectPais = () =>  (
        <Fragment>
            {lupa} 
        <select
             className = 'browser-default custom-select'

             value = {state}
             onChange = {evento => actualizarState(evento.target.value)}
         >
             {/* <option value = ''>-Seleccione-</option> */}
             {opciones.map( opcion => (
                 <option key = {opcion.codigo} value = {opcion.codigo}> {opcion.nombre} </option>
             ))}
        </select>
        </Fragment>
    );
    return [state,SelectPais]
};

export default usePais;

// const imagen = (urlToImage) ? 
//             <div className = 'card-image'>
//                  <img src = {urlToImage} alt = {title}/>
//                  <span  className = 'card-title'>{source.name}</span>
//             </div>
//     : null;

// const imagen = (verdad) ? <div>
//             <Imagen
//             src = {imagen}
//             alt = 'imagen cripto'
//             />
//         </div>
//         : null;








































// import React, {Fragment, useState} from 'react';
// import styled from '@emotion/styled';
// //import PropTypes from 'prop-types';


// const Label = styled.label`
//     font-family: 'Bebas Neue', cursive;
//     color: #FFF;
//     text-transform: uppercase;
//     font-weight: bold;
//     font-size: 2.4rem;
//     margin-top: 2rem;
//     display: block;
// `;
// const Select = styled.select`
//     width: 100%;
//     display: block;
//     padding: 1rem;
//     -webkit-appearance: none;
//     border-radius: 10px;
//     border: none;
//     font-size: 1.2rem;
// `;


// const usePais = (label,stateInicial,opciones) =>   { 

// // State de nuestro custom  hook
//     const [state, actualizarState] = useState(stateInicial);


//     const Seleccionar = () => (
//         <Fragment>
//         <Label>{label}</Label>
//         <Select
//             onChange = {evento => actualizarState(evento.target.value)}
//             value = {state}
//         >
//             <option value = ''>-Seleccione-</option>
//             {opciones.map(opcion =>(
//                 <option key = {opcion.codigo} value = {opcion.codigo}>{opcion.nombre}</option>
//             ))}
//         </Select>
//     </Fragment>
//     );

//     // retornar state, interfaz y fn que modifica el state
//     return [state, Seleccionar]

        
// };
      
  

// // Header.propTypes = {
// //   titulo: PropTypes.string.isRequired
// // };
// export default usePais;
