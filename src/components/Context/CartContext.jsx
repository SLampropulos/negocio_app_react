import {useContext,createContext, useState} from 'react';


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {

    const [carrito,setCarrito] = useState([]);

    function agregarAlCarrito(compra){
        let esta =false;
        carrito.forEach(element => {
            
            if(element.prodActual.id === compra.prodActual.id){
                esta = true;
                element.cant += compra.cant;
            }
        });
        if(!esta) setCarrito([...carrito,compra]);

        
    }

    function isInCard(id){
        let encontrado = carrito.filter(element => element.prodActual.id === id);
        return (encontrado.length >0);
    }
    
    function quitarItem(id) {
        setCarrito(carrito.filter(element => element.prodActual.id !== id));
    }

    function borrarCarrito(){
        setCarrito([]);
    }

    return (
        <CartContext.Provider value={
                {carrito,
                agregarAlCarrito,
                borrarCarrito,
                quitarItem
                }
            }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
