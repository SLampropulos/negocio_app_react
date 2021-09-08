import Card from'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ItemDetail({prodActual}) {

    return (
        <div >
            <Card className="w-75">
                <Row>
                    <Col>
                        <Card.Img variant="top" src={prodActual.img} alt="imagen"/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{prodActual.name}</Card.Title>
                            <Card.Text>{prodActual.detalle}</Card.Text>
                            <div className="d-grid gap-2">
                                <Button variant="primary" >Detalles</Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ItemDetail;
