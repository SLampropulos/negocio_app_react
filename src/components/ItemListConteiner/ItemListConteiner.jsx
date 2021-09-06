import ItemCount from "./ItemCount";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './ItemList';

function ItemListConteiner(props) {
    
    const onAdd = (carrito) =>{
        alert(`se agregaron ${carrito} productos al carrito`);
    }

    return (
        <div className=" p-3">
            <p>Hola {props.greeting}</p>
            <Row>
                <Col>
                    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                </Col>
                <Col>            
                    
                </Col>
            </Row>
            <ItemList />
        </div>
    )
}

export default ItemListConteiner
