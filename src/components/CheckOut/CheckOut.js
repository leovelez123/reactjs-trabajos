import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../../service/firebase/firebaseConfig"
import { CartContext } from "../Context/CartContext"



const CheckOut = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
            
        try {
            const objOrder = {
                buyer: {
                    name: 'leo velez',
                    telefono: '3546435142',
                    mail: 'leo@hotmail.com',
                },
                items: cart,
                total
            }
    
        const batch = writeBatch(db)
    
        const ids = cart.map(prod => prod.id)
    
        const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
        const productAddedCartFromFirestore = await getDocs(productsRef)
        const { docs } = productAddedCartFromFirestore
    
        const outOfStock = []
    
        docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock 
    
                const productAddedCart = cart.find(prod => prod.id === doc.id)
                const cantidadProd = productAddedCart.cantidad
    
                if(stockDb >= cantidadProd) {
                    batch.update(doc.ref, {stock: stockDb - cantidadProd})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0 ){
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
    
                const { id } = orderAdded

                setOrderId(id)
                
                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 5000)

                console.log(id)
            } else {
                console.error('Hay productos fuera de stock.')
            }
        } catch(error){
            console.error(error)
        } finally {
            setLoading(false)
        } 
    }
    
    if(loading) {
        <h1>Generando orden...</h1>
    }

    if(orderId){
        return (
            <div>
                <h1>El ID de su compra es: {orderId}</h1>
            </div>
        )
    }

    if(cart.length === 0) {
        <h1>No hay productos en el carrito!</h1>
    }

    return (
        <div>
            <h1>CheckOut</h1>
            <button onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default CheckOut