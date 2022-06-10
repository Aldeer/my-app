import React,{Component} from 'react';
import './Cuadrado'
import Cuadrado from './Cuadrado';

class Tablero extends Component{
    constructor(props){
        super(props);
        this.state = {
            cuadrados: Array(9).fill(null),
            xEsSiguiente: true,
        }
    }
    handleClick(i){
        const cuadrados = this.state.cuadrados.slice();
        cuadrados[i] = this.state.xEsSiguiente ? 'X' : 'O';
        this.setState({
            cuadrados: cuadrados,
            xEsSiguiente: !this.state.xEsSiguiente,
        });
    }
    renderCuadrado(i){
        return (
            <Cuadrado 
                value={this.state.cuadrados[i]} 
                onClick={() => this.handleClick(i)}
            />
        );
    }
    render(){
        const estado = 'Siguiente en mover: ' + (this.state.xEsSiguiente ? 'X' : 'O');
        return (
            <div>
                <div>{estado}</div>
                <div className='tablero-fila'>
                    {this.renderCuadrado(1)}
                    {this.renderCuadrado(2)}
                    {this.renderCuadrado(3)}
                </div>
                <div className='tablero-fila'>
                    {this.renderCuadrado(4)}
                    {this.renderCuadrado(5)}
                    {this.renderCuadrado(6)}
                </div>
                <div className='tablero-fila'>
                    {this.renderCuadrado(7)}
                    {this.renderCuadrado(8)}
                    {this.renderCuadrado(9)}
                </div>
            </div>
        );
    }
}
export default Tablero;