import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from "./ItemCount";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './ItemList';
import prodc from '../../assets/imagenes';

const items = [
    
    {id: 1, product:"pasteleria" ,name:"Cheese cake", price:1500 ,img:prodc.cheeseCake},
    {id: 2, product:"pasteleria" ,name:"Mousse de chocolate", price:1300, img:prodc.mousse},
    {id: 3, product:"pasteleria" ,name:"CarrotCake", price:1500,img:prodc.carrotCake},
    {id: 4, product:"panaderia" ,name:"Rolls de canela", price:300,img:prodc.rollsCanela},
    {id: 5, product:"pasteleria" ,name:"Macarons", price:200,img:prodc.macarons},
    {id: 6, product:"panaderia" ,name:"Pan de chocolate", price:350,img:prodc.panDeChocolate}
];

let demora = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(items);
    },2000);
});


function ItemListConteiner(props) {
    
    const {product} = useParams();

    const [items, setItems] = useState([]);
    useEffect(() => {
        if(product === undefined){
            demora.then((resp)=>setItems(resp));
        }else{
            demora.then((resp)=>setItems(resp.filter( i => product === i.product)));
        }
    },[product]);

    const onAdd = (carrito) =>{

        alert(`se agregaron ${carrito} productos al carrito`);
    }
    console.log(product);

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
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListConteiner
