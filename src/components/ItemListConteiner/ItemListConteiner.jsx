import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from './ItemList';

import {getFirestore} from '../../service/getFirebase';

/*
import prodc from '../../assets/imagenes';
const Items = [
    
    {id: 1, product:"pasteleria" ,name:"Cheese cake", price:1500 ,img:prodc.cheeseCake},
    {id: 2, product:"pasteleria" ,name:"Mousse de chocolate", price:1300, img:prodc.mousse},
    {id: 3, product:"pasteleria" ,name:"CarrotCake", price:1500,img:prodc.carrotCake},
    {id: 4, product:"panaderia" ,name:"Rolls de canela", price:300,img:prodc.rollsCanela},
    {id: 5, product:"pasteleria" ,name:"Macarons", price:200,img:prodc.macarons},
    {id: 6, product:"panaderia" ,name:"Pan de chocolate", price:350,img:prodc.panDeChocolate}
];*/


function ItemListConteiner(props) {
    
    const {product} = useParams();
    const [carga,setCarga] = useState(true);
    
    const [items, setItems] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const queryDb = db.collection('Items').get();
        
        setTimeout(() =>{
            if(product === undefined){
                queryDb.then(data => {
                    setItems(data.docs.map(item => ({id: item.id, ...item.data()})));
                });
            }else{
                const categ = db.collection('Items').where('productId','==',product).get()
                categ.then(data => {
                    setItems(data.docs.map(item => ({id: item.id, ...item.data()})));
                })
            }
            setCarga(false);
        },2000);
        
    },[product]);

    return (
        <div className=" p-3">
            {carga ?
                <Spinner className="mt-5" animation="border" />
                :
                <ItemList items={items}/>        
            }

        </div>
    )
}

export default ItemListConteiner
