import axios from 'axios'

const getProducts = (callback)=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
        callback(res.data)
    })
    .catch((error)=>{
        console.error(error)
    })
}

const getDetailProduct = (id,callback)=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        callback(res.data)
    })
    .catch((error)=>{
        console.error(error)
    })
}

export { getProducts, getDetailProduct }