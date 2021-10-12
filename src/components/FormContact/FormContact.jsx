import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ContactInfo from '../ContactInfo/ContactInfo';
import { useCartContext } from '../Context/CartContext';
import {getFirestore} from '../../service/getFirebase';
import {useState} from 'react'



function FormContact({total}) {
    const {carrito,cliente,setCliente,borrarCarrito} = useCartContext();
    const [item,setItem] =useState();
    const [valido,setValido] =useState(false);
    const [idOrder, setIdOrder] = useState("");
    

    const newOrder={
        buyer: cliente,
        itmes: carrito,
        total: total
    }

    function finalizaCompra(event) {
        event.preventDefault();
        const db = getFirestore();
        const orders = db.collection('orders');
        
        carrito.forEach(element => {
            const items = db.collection('Items').doc(element.prodActual.id);
            
            if(cliente.mail !== cliente.mailConfrimacion){
                alert("el mail no son iguales");
                return;
            }

            items.get()
            .then(data =>{
                setItem(data.data());

                if((data.data().stock - element.cant) <0) {
                    alert('nos quedamos sin stock :(\nactualiza el carrito antes que te quedes sin tu orden!');
                    return;
                }
                setValido(true);
            })
            if(valido){
                items.update({
                    stock: (item.stock - element.cant)
                    
                })  
                .then((resp) => console.log("ok"))
                .catch((err) => console.log("error"))
            }
        })

        if(valido){
            orders.add(newOrder)
            .then(resp=> {
                setIdOrder(resp.id);
            })
            .catch(err => console.log("errpr"));
        }

    
    }
    

    function handleChange(event) {
        setCliente(
            {
                ...cliente,
                [event.target.name]: event.target.value,
            }
        )
    }
    return (
        <div>
            {valido ?
                <ContactInfo idCompra={idOrder} mail={cliente.mail}/>
                :
                <Form onChange={handleChange} onSubmit={finalizaCompra}>
                    <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Control placeholder="Nombre Completo" name="nombre" required />
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridMail">
                        <Form.Control placeholder="Mail" name="mail" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEConfimarMail">
                        <Form.Control type="email" name="mailConfrimacion" placeholder="Confirmar mail" required />
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
            }

            
        </div>
    )
}

export default FormContact
