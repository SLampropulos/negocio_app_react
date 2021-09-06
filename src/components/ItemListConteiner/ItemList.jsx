import { useEffect, useState } from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import prodc from '../../assets/imagenes';

const items = [
    
    {id: 1, name:"Cheese cake", price:1500 ,img:prodc.cheeseCake},
    {id: 2, name:"Mousse de chocolate", price:1300, img:prodc.mousse},
    {id: 3, name:"CarrotCake", price:1500,img:prodc.carrotCake},
    {id: 4, name:"Rolls de canela", price:300,img:prodc.rollsCanela},
    {id: 5, name:"Macarons", price:200,img:prodc.macarons},
    {id: 6, name:"Pan de chocolate", price:350,img:prodc.panDeChocolate}
];

let demora = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(items);
    },2000);
});

function ItemList() {
    const [tortas, setTorta] = useState([]);
    useEffect(() => {
        demora.then((resp)=>console.log(setTorta(resp)));
        
    },[]);


    return (
        <div >
            <Row  className=" justify-content-around m-5">
                {tortas.map(torta =>
                <Col className="col-12 col-md-4 col-lg-3 mx-2 my-3 ">
                    <Item item={torta} />
                </Col>  
                )}
            </Row>
            
        </div>
    );
}

export default ItemList
