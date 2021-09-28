import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useCartContext } from '../Context/CartContext';
import {getFirestore} from '../../service/getFirebase';



function FormContact({total}) {
    const {carrito,cliente,setCliente,borrarCarrito,vaciarCliente} = useCartContext();
    
    const newOrder={
        buyer: cliente,
        itmes: carrito,
        total: total
    }
    function finalizaCompra(){
        const bd = getFirestore();
        const orders = bd.collection('orders')
    
        orders.add(newOrder)
        .then(resp=> console.log(resp))
        .catch(err => console.log(err));

        // carrito.forEach(element => {
        //     console.log(element.prodActual.id);
        //     const items = bd.collection('items').doc(element.prodActual.id);
        //     console.log(items.data());
        //     items.update({
        //         stock: 5
        //     })
        //     .then(resp => console.log("bien"))
        //     .catch(err => console.log("error"));
        // })
        vaciarCliente();
        borrarCarrito();
    
    }
    

    function handleChange(event) {
        setCliente(
            {
                ...cliente,
                [event.target.name]: event.target.value,
            }
        )
    }
    console.log(cliente);

    return (
        <div>
            <Form onChange={handleChange} onSubmit={finalizaCompra}>
                <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Control placeholder="Nombre Completo" name="nombre" required />
                </Form.Group>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridMail">
                    <Form.Control placeholder="Mail" name="mail" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEConfimarMail">
                    <Form.Control type="email" name="mail" placeholder="Confirmar mail" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="Direccion">
                        <Form.Control placeholder="Direccion" name="direccion" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEConfimarMail">
                    <Form.Control placeholder="numero de telefono" name="telefono" required />
                    </Form.Group>
                </Row>
                    <hr class="featurette-divider"></hr>
                <Row className="align-items-center">
                    <Col>
                        <Button onClick={borrarCarrito}>Vaciar carrito</Button>
                    </Col>
                    <Col>
                        <p>Total: ${total}</p>
                        <Button type="submit">Finalizar compra</Button>
                    </Col>
                </Row>
            </Form>
            
        </div>
    )
}

export default FormContact