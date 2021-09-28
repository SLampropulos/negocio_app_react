import {useContext,createContext, useState} from 'react';
import firebase from 'firebase';


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const clienteVacio ={nombre:'',mail:'',direccion:'',date: firebase.firestore.Timestamp.fromDate(new Date()),numero:''};

function CartContextProvider({children}) {

    const [carrito,setCarrito] = useState([]);
    const [cliente,setCliente] = useState(clienteVacio);

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
    function vaciarCliente(){
        setCliente(clienteVacio);
    }

    return (
        <CartContext.Provider value={
                {carrito,
                agregarAlCarrito,
                borrarCarrito,
                quitarItem,
                isInCard,
                setCliente,
                cliente,
                vaciarCliente
                }
            }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
