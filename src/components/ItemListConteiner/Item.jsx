import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item(item) {
    return (
        
        <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} alt="imagen"/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <div className="d-grid gap-2">
                    <Button variant="primary" >Detalles</Button>
                </div>
            </Card.Body>
        </Card>
        
    )
}

export default Item
