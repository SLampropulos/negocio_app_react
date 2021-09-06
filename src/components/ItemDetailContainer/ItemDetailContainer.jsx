import {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';


let demora = new Promise((resolve) => {
    setTimeout(() =>{
        resolve({nombre:"producto detallado",detalle:"soy un detalle",img:'https://images.pexels.com/photos/557662/pexels-photo-557662.jpeg?cs=srgb&dl=pexels-foodie-factor-557662.jpg&fm=jpg'});
    },2000);
});

function ItemDetailContainer() {
    const [prodActual,setProdActual] = useState({});
    useEffect(() => {
        demora.then((resultado) => {setProdActual(resultado)});
    },[]);

    return (
        <div className=" p-3 ">
            <ItemDetail prodActual={prodActual} />
        </div>
    )
}

export default ItemDetailContainer
