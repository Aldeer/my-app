import React from 'react';
import Charmander from '../images/Charmander.png'
import '../Styles/Card.css'

class Card extends React.Component{
    render(){
        return (
            <div className='card'>
                <div>
                    <img className='img-size' src={Charmander} alt='img no disponible'/>
                </div>
                <div>
                    <h1 className='centrado'>Charmander</h1>
                    <p className='centrado'>Tipo Fuego</p>
                </div>
            </div>
        );
    }
}

export default Card;