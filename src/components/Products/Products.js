const products = [
    {
        id: '1',
        nombre: 'Taza',
        precio: 1000,
        categoria: 'tazas',
        img: 'https://i.pinimg.com/originals/98/8f/6d/988f6dba31d65470cf7c2fef6d82209b.webp',
        stock: 15,
        descripcion: 'Taza con el diseño que elijas'
    },
    {
        id: '2',
        nombre: 'Agenda',
        precio: 2000,
        categoria: 'agendas',
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/526/318/products/sin-titulo-18_mesa-de-trabajo-11-ff5a8bc293605c8f0d16710325253828-640-0.jpg',
        stock: 20,
        descripcion: 'Agendas con el diseño que elijas'
    },
    {
        id: '3',
        nombre: 'Cuadro',
        precio: 1500,
        categoria: 'cuadros',
        img: 'https://www.lalasolan.com.ar/wp-content/uploads/2022/07/Meme_Personalizado-600x758.jpg',
        stock: 10,
        descripcion: 'Cuadros con el diseño que elijas'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoriaId))
        }, 500)
    } )}

 export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
            }, 500)
        })
}