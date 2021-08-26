import ItemCount from "./ItemCount"

function ItemListConteiner(props) {
    
    const onAdd = (carrito) =>{
        alert(`se agregaron ${carrito} productos al carrito`);
    }

    return (
        <div className="col-4 justify-content-center">
            <p>Hola {props.greeting}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListConteiner
