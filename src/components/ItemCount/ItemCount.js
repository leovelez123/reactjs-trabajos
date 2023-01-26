import { useState } from "react"



const ItemCount = () => {
    const [count, setCount] = useState(0)    
    
    const decrement = () => {
        setCount(count - 1)
    
    }
    const increment = () => {
        setCount(count + 1)
    }
    
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button>Agregar al carro</button>
        </div>
    )
}

export default ItemCount