import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {useCartContext} from '../Context/CartContext';

function CartWidget() {
    const {cantCarrito} = useCartContext();
    
    return (
        
        <div className="position-relative ">
            <Button variant="light">
                <Image src="https://image.flaticon.com/icons/png/512/3144/3144456.png" width={30} height={30}/>
                {!(cantCarrito===0) && <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-secondary">{cantCarrito} <span class="visually-hidden">unread messages</span></span>}
            </Button>
        </div>
    )
}

export default CartWidget
