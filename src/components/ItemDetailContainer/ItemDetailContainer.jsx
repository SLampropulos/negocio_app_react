import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from './ItemDetail';
import {getFirestore} from '../../service/getFirebase';


function ItemDetailContainer() {
    const [prodActual,setProdActual] = useState({});
    const [carga,setCarga] = useState(true);
    const [encontro,setEncontro] = useState(true);

    const {id} = useParams();
    
    useEffect(() => {
        
        const db = getFirestore();
        const producto = db.collection('Items').doc(id).get();

        producto.then(data => {
            setProdActual({id: data.id , ...data.data()});
            setCarga(false);
            if(data.data() === undefined) setEncontro(false);
            console.log(data.data());
        })
        .catch(err=>setEncontro(false));
    },[id]);


    return (
        <div className=" p-3 justify-content-center ">
            {carga ? 
                <Spinner className="mt-5" animation="border" />
                :
                encontro ?
                    <ItemDetail prodActual={prodActual} />
                    :
                    <p>Ocurrio un error el producto no se encuentra</p>
            }
        </div>
    )
}

export default ItemDetailContainer
