import {useCartContext} from '../Context/CartContext';
import Button from 'react-bootstrap/esm/Button';
import ItemCart from './ItemCart';
import {Link} from'react-router-dom';
import FormContact from '../FormContact/FormContact';

function NoHayCompras() {
    return (
        <div>
            <h2 className="mt-5">No hay item cargados... :(</h2> 
            <Link to={'/'}>
                <Button className="mt-5" size="lg">Ir al catalogo</Button>
            </Link>
        </div>
    )
}


function Carrito({carrito,quitarItem}){
    
    let total = 0;
    
    carrito.forEach(element => {
        console.log(element);
        total += (element.prodActual.price * element.cant);
    });
    return(
        <div>
            {carrito.map(compra =>
                <ItemCart compra={compra} quitarItem={quitarItem} />
                )}
                
            <hr class="featurette-divider"></hr>
            <FormContact total={total}/>
        </div>
    )
}

function CartContainer() {

    const {carrito,quitarItem,} = useCartContext();
    let vacio = carrito.length ===0 ;
    return (
        <div className="p-3">
            {vacio ?
                <NoHayCompras/>
                :
                <Carrito carrito={carrito} quitarItem={quitarItem}/>
            }
        </div>
    )
}

export default CartContainer
