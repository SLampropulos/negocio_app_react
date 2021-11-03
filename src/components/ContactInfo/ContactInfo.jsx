import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {useCartContext} from '../Context/CartContext';
import React from 'react'

function ContactInfo({idCompra, mail}) {

    const {borrarCarrito} = useCartContext();

    return (
        <div>
            <h1>Feliciatacions se a realizado su compra!</h1>
            <h4>Su id de compra es: {idCompra}</h4>
            <p>Se le comunicara por medio de su mail, {mail}</p>
            <Link to={`/`}>    
                <Button onClick={borrarCarrito}>Volver a la pagina principal</Button>
            </Link>
        </div>
    )
}

export default ContactInfo
