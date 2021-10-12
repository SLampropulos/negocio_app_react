import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const ItemCount = ({stock,initial,onAdd}) =>  {
    const [stockActual,setStock] = useState(stock);
    const [cont,setCont] = useState(initial);
    const [carrito,setCarrito] = useState(0);
    
    const aumentar = () => {
        if(stock>cont) setCont(cont + 1);
    };
    const restar = () => {
        if(cont > 1) setCont(cont - 1);        
    }
    const agregar = () => {
        if(stockActual >= cont){
            setStock(stockActual-cont);
            setCarrito(carrito+cont);
        } 
        onAdd(cont);
        setCont(1);
    }


    return (
        <div>
            <p className=" small mb-1">Stock disponible: {stockActual}</p>
            <InputGroup className="pb-4 d-flex justify-content-center" >
                <Button variant="outline-secondary " onClick={restar}>-</Button>
                <label className="px-5 py-1">{cont}</label>
                <Button variant="outline-secondary" onClick={aumentar}>+</Button>
            </InputGroup>
            <Button variant=" mt-1 btn-outline-primary" onClick={agregar}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
