import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ItemList({items}) {


    return (
        <div >
            <Row  className=" justify-content-around m-5">
                {items.map(torta =>
                <Col className="col-12 col-md-4 col-lg-3 mx-2 my-3 ">
                    <Item item={torta} />
                </Col>  
                )}
            </Row>
            
        </div>
    );
}

export default ItemList
