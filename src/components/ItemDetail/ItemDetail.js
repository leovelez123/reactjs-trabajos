import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"

const ItemDetail = ({ id, nombre, categoria, precio, img, descripcion, stock }) => {
   
    const [cantidad, setCantidad] = useState(0)

    const { addItem } = useContext(CartContext)

   const handleOnAdd = (cantidad) => {
    console.log ('Agregue al carrito:', cantidad )

    setCantidad(parseInt(cantidad))
   
    addItem({ id, nombre, cantidad, precio})

    }
   
    return (
        <div>
            <h2>{nombre}</h2>
            <h4>{categoria}</h4>
            <img src={img} alt={nombre} />
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
            {
                cantidad > 0 ? (
                    <Link>Terminar Compra</Link>
                ) : ( <ItemCount stock= {stock} onAdd={handleOnAdd}/>)
            }
        </div>
    )
}

export default ItemDetail