import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { useCartContext } from '../Context/CartContext';

function ItemCart({compra, quitarItem}) {
    const {valido} = useCartContext();
    let {prodActual, cant} = compra;

    return (
        <Card className="m-5">
                <Row className="align-items-center">
                    <Col className="d-none d-xl-block col-lg-3">
                        <Card.Img variant="top" src={prodActual.img} alt="imagen"/>
                    </Col>
                    <Col className="col-12 col-lg-9">
                        <Card.Body>
                            <Row className="justify-content-between align-items-center">
                                <Col ClassName="col-4">
                                    <Card.Title>{prodActual.name}</Card.Title>
                                </Col>
                                <Col>
                                    <Row><p>Cantidad:</p></Row>
                                    <Row><p>{cant}</p></Row>
                                </Col>
                                <Col>
                                    <Row><p>Precio:</p></Row>
                                    <Row><p>{prodActual.price * cant}</p></Row>
                                </Col>
                                {valido ?
                                <></>
                                :
                                <Col>
                                    <Button onClick={() => quitarItem(prodActual.id)}> Sacar producto </Button>
                                </Col>
                                }
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
    )
}

export default ItemCart
