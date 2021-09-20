import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from './ItemDetail';
import {getFirestore} from '../../service/getFirebase';


function ItemDetailContainer() {
    const [prodActual,setProdActual] = useState({});
    const [carga,setCarga] = useState(true);

    const {id} = useParams();
    
    useEffect(() => {
        
        const db = getFirestore();
        const producto = db.collection('Items').doc(id).get();

        setTimeout(() =>{
            producto.then(data => {
                setProdActual({id: data.id , ...data.data()});
            })
            setCarga(false);
        },2000);
    },[id]);


    return (
        <div className=" p-3 justify-content-center ">
            {carga ? 
                <Spinner className="mt-5" animation="border" />
                :
                <ItemDetail prodActual={prodActual} />
            }
        </div>
    )
}

export default ItemDetailContainer
