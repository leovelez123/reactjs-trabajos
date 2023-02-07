import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'

const ItemListContainer = ({greeting}) => {
   
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    useEffect(() => {
        (async () =>{
            setLoading(true)
        
            const productsRef = collection(db, 'products')
       
            try{
                const snapshot = await getDocs(productsRef)
                const productsAdapted = snapshot.docs.map(doc =>{
                    const fields = doc.data()

                    return {id: doc.id, ...fields}
                })

                setProducts(productsAdapted)

            }catch(error){
                console.log(error)
            } finally {
                setLoading(false)
            }
    })() 
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