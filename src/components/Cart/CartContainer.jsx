import {useCartContext} from '../Context/CartContext';
import Button from 'react-bootstrap/esm/Button';
import ItemCart from './ItemCart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Carrito({carrito,borrarCarrito,quitarItem}){
    
    let total = 0;
    
    carrito.forEach(element => {
        console.log(element);
        total += (element.prodActual.price * element.cant);
    });
    return(
        <div>
            {carrito.map(compra =>
                <ItemCart compra={compra} quitarItem={quitarItem} />
                )}
            <Row className="align-items-center">
                <Col>
                    <Button onClick={borrarCarrito}>Vaciar carrito</Button>
                </Col>
                <Col>
                    <p>Total: ${total}</p>
                    <Button>Finalizar compra</Button>
                </Col>
            </Row>
        </div>
    )
}

function CartContainer() {

    const {carrito, borrarCarrito,quitarItem,} = useCartContext();
    let vacio = carrito.length ===0 ;
    return (
        <div className="p-3">
            {vacio ?
                <h2 className="mt-5">No hay item cargados... :(</h2> 
                :
                <Carrito carrito={carrito} borrarCarrito={borrarCarrito} quitarItem={quitarItem}/>
            }
        </div>
    )
}

export default CartContainer
