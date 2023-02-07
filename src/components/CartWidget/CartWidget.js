import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({ cantidad }) => {
    return (
        <Link to='/cart' className='carrito'>
            <img className='carito-img' src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png" alt="carrito" />
            {cantidad}
        </Link> 
    )
}

export default CartWidget