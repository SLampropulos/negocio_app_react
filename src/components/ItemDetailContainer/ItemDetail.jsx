import { useState } from 'react';
import Card from'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount  from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {useCartContext} from '../Context/CartContext'

const ButtonACarrito = () => {
    return(
        <Link to={`/cart`}>    
            <Button >Finalizae Compra</Button>
        </Link>
    );
}

function ItemDetail({prodActual}) {

    const [botonActual,setBotonActual] = useState('count');
    const {agregarAlCarrito} = useCartContext();
    
    function onAdd(cant){
        setBotonActual('terminarCompra');
        agregarAlCarrito({prodActual,cant});
        
    }

    return (
        <div >
            <Card className="m-5">
                <Row >
                    <Col >
                        <Card.Img variant="top" src={prodActual.img} alt="imagen"/>
                    </Col>
                    <Col className="col-12 col-lg-6 p-3">
                        <Card.Body>
                            <Card.Title>{prodActual.name}</Card.Title>
                            <Card.Text>{prodActual.detalle} <br/> Precio: {prodActual.price} 
                            </Card.Text>
                            
                        </Card.Body>
                        {botonActual === 'count' ? <ItemCount stock={10} initial={1} onAdd={onAdd} /> : <ButtonACarrito/>}
                        
            
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ItemDetail;
