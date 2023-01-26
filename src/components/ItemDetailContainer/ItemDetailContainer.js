import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [products, setProduct] = useState({})
    const {productId} = useParams()
    useEffect(() => {
        getProductsById(productId)
        .then(product =>{
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    },[productId])

    return (
        <div>
            <h1>Detalle del producto.</h1>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer