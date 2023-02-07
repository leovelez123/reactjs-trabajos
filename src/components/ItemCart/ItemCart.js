import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const ItemCart = ({ id, nombre, cantidad, precio }) => {
    
    const { eliminarItem } = useContext(CartContext)
    
    return (
        <article>
            <h3>{nombre}</h3>
            <h4>Cantidad: {cantidad}</h4>
            <h4>Precio: ${precio}</h4>
            <h4>SubTotal: ${precio * cantidad}</h4>
            <button onClick={() => eliminarItem(id)}>Eliminar</button>
        </article>
    )
}

export default ItemCart