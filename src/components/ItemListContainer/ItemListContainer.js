import './ItemListContainer.css'
import { getProducts } from '../Products/Products'
import { getProductsByCategoria } from '../Products/Products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
   
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    useEffect(() => {
        const asyncFuntion = categoriaId ? getProductsByCategoria : getProducts

        asyncFuntion(categoriaId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoriaId])
   
    if(loading) {
        return <h1>Cargando...</h1>
    }

    
    
    return (
        <div>
            <h1 className='item-list'>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer