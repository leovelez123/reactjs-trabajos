import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
            <h1 className='titulo'>Vico diseño</h1>
            <div>
                <Link to='/categoria/tazas' className='btn-opc'>Tazas</Link>
                <Link to='/categoria/agendas' className='btn-opc'>Agendas</Link>
                <Link to='/categoria/cuadros' className='btn-opc'>Cuadros</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar