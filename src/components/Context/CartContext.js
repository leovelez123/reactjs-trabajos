import { useState, createContext } from "react"

export const CartContext = createContext({
    cart: []
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        }
    }
    
    const eliminarItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getCantidadTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.cantidad
        })
        
        return accu
    }

    const cantidadTotal = getCantidadTotal()

    return (
        <CartContext.Provider value={{ cart, addItem, cantidadTotal, eliminarItem }}>
            {children}
        </CartContext.Provider>
    )
}