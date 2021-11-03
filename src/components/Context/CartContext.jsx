import {useContext,createContext, useState} from 'react';
import firebase from 'firebase';


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const clienteVacio ={nombre:'',mail:'',direccion:'',date: firebase.firestore.Timestamp.fromDate(new Date()),numero:''};

function CartContextProvider({children}) {

    const [carrito,setCarrito] = useState([]);
    const [cantCarrito,setCantCarrito] = useState(0);
    const [cliente,setCliente] = useState(clienteVacio);
    const [valido,setValido] =useState(false);
    
    function agregarAlCarrito(compra){
        let esta =false;
        carrito.forEach(element => {
            
            if(element.prodActual.id === compra.prodActual.id){
                esta = true;
                element.cant += compra.cant;
                setCantCarrito(cantCarrito + compra.cant);
            }
        });
        if(!esta) {
            setCarrito([...carrito,compra]);
            setCantCarrito(cantCarrito + compra.cant);
        }

    }

    function isInCard(id){
        let encontrado = carrito.filter(element => element.prodActual.id === id);
        return (encontrado.length >0);
    }
    
    function quitarItem(id) { 
        setCantCarrito(0);    
        setCarrito(carrito.filter(element => element.prodActual.id !== id));
        carrito.forEach(element => setCantCarrito(cantCarrito + element.cant))
        
    }

    function borrarCarrito(){
        setCarrito([]);
        setCantCarrito(0);
        setValido(false);
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
                vaciarCliente,
                cantCarrito,
                valido,
                setValido
                }
            }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
