import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div>
            <div>
                <h1>Estos son los productos de tu carrito..</h1>
                <CartList cart={cart} />
            </div>
            <Link to='/checkout'>CheckOut</Link> 
        </div>
    )
}

export default Cart