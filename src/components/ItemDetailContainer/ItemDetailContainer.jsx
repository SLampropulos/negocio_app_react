import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import prodc from '../../assets/imagenes';

const items = [
    
    {id: "1", product:"pasteleria" ,name:"Cheese cake", detalle: "soy detalle",price:1500 ,img:prodc.cheeseCake},
    {id: "2", product:"pasteleria" ,name:"Mousse de chocolate", detalle: "soy detalle",price:1300, img:prodc.mousse},
    {id: "3", product:"pasteleria" ,name:"CarrotCake", detalle: "soy detalle",price:1500,img:prodc.carrotCake},
    {id: "4", product:"panaderia" ,name:"Rolls de canela", detalle: "soy detalle",price:300,img:prodc.rollsCanela},
    {id: "5", product:"pasteleria" ,name:"Macarons", detalle: "soy detalle",price:200,img:prodc.macarons},
    {id: "6", product:"panaderia" ,name:"Pan de chocolate", detalle: "soy detalle",price:350,img:prodc.panDeChocolate}
];

let demora = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(items);
    },2000);
});


function ItemDetailContainer() {
    const [prodActual,setProdActual] = useState({});

    const {id} = useParams();
    
    useEffect(() => {
        
        demora.then((resultado) => {
            setProdActual(resultado.find( i => id === i.id));
        });
    },[id]);


    return (
        <div className=" p-3 justify-content-center ">
            <ItemDetail prodActual={prodActual} />
        </div>
    )
}

export default ItemDetailContainer
