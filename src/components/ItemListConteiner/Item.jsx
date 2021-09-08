import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item({item}) {
    return (
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} alt="imagen"/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                
                <Link to={`detalle/${item.id}`} className="d-grid gap-2">
                    <Button variant="primary" >Detalles</Button>
                </Link>
    
            </Card.Body>
        </Card>
        
    )
}

export default Item
