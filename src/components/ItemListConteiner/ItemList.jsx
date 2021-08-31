import { useEffect, useState } from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const items = [
    {id: 1, name:"cheese cake", price:1500 ,img:"https://images.pexels.com/photos/557662/pexels-photo-557662.jpeg?cs=srgb&dl=pexels-foodie-factor-557662.jpg&fm=jpg"},
    {id: 2, name:"mousse de chocolate", price:1300, img:"https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?cs=srgb&dl=pexels-alexander-dummer-132694.jpg&fm=jpg"},
    {id: 3, name:"cheese cake", price:1500,img:"https://images.pexels.com/photos/557662/pexels-photo-557662.jpeg?cs=srgb&dl=pexels-foodie-factor-557662.jpg&fm=jpg"},
    {id: 4, name:"cheese cake", price:1000,img:"https://images.pexels.com/photos/557662/pexels-photo-557662.jpeg?cs=srgb&dl=pexels-foodie-factor-557662.jpg&fm=jpg"}
    
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
        <div>
            <Row>
                {tortas.map(torta =>
                <Col>
                    <Item 
                        key={torta.id}
                        price={torta.price}
                        name={torta.name}
                        img={torta.img}
                    />
                </Col>  
                )}
            </Row>
            
        </div>
    );
}

export default ItemList
