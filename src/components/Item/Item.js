import { Link } from "react-router-dom"

const Item = ({ id, nombre, img, precio, }) => {
    return (
            <div>
                <h3>{nombre}</h3>
                <img src={img} alt={img} />
                <p>${precio}</p>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </div>
    )
}

export default Item