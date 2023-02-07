import { useState } from "react"



const ItemCount = ({ inicial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(inicial)    
    
    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }
    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }
    
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carro</button>
        </div>
    )
}

export default ItemCount