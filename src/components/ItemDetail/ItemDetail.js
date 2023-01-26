const ItemDetail = ({id, nombre, categoria, precio, img, descripcion, stock}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <h4>{categoria}</h4>
            <img src={img} alt={nombre} />
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
        </div>
    )
}

export default ItemDetail