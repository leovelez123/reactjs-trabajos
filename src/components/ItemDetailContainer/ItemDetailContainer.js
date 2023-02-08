import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';
const ItemDetailContainer = () => {

    const [products, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
   
    useEffect(() => {
        (async () => {
            const productsRef = doc(db, 'products', productId)

            try {
                const snapshot = await getDoc(productsRef)
            
                const fields = snapshot.data()
                const productsAdapted = { id: snapshot.id, ...fields}
    
                setProduct(productsAdapted)    
            } catch(error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        
          
        })()
    },[productId])

    if (loading) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <div>
            <h1>Detalle del producto.</h1>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer