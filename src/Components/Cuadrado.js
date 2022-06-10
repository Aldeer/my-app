import React from 'react';

function Cuadrado(props){
    return (
        <button
            className="cuadrado"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}
export default Cuadrado;