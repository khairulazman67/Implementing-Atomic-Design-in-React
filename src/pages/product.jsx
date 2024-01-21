import { Fragment, useEffect, useState, useRef } from "react"
import CardProduct from "../components/fragments/CardProduct"
import Button from '../components/elements/buttons/index';
import Counter from './counter';

const products = [
    {
        id          : 1,
        name        : "Sepatu Baru Alhamdulillah",
        price       : 1000000,
        image       : "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1800&t=st=1705508532~exp=1705509132~hmac=621962abb9e3b381da2ffc3a7199cfa1956005eb4ec95f4d94ce8ad3be513e88",
        description : `Aliquip aliqua anim dolore dolore ex culpa voluptate aliqua mollit voluptate nisi consectetur. Ea sit veniam esse non deserunt 
            in quis nostrud. Est dolor ut id do eiusmod officia. `
    },
    {
        id          : 2,
        name        : "Sepatu Lama Alhamdulillah",
        price       : 1000000,
        image       : "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1800&t=st=1705508532~exp=1705509132~hmac=621962abb9e3b381da2ffc3a7199cfa1956005eb4ec95f4d94ce8ad3be513e88",
        description : `Aliquip aliqua anim Commodo duis labore sit aute amet cillum nulla et. Voluptate culpa anim aliquip irure. 
        Aliqua labore officia sunt minim  `
    },

    {
        id          : 3,
        name        : "Sepatu Lama Astaghfirullah",
        price       : 2000000,
        image       : "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1800&t=st=1705508532~exp=1705509132~hmac=621962abb9e3b381da2ffc3a7199cfa1956005eb4ec95f4d94ce8ad3be513e88",
        description : `Aliquip aliqua anim  eiusmod officia. Commodo duis labore sit aute amet cillum nulla et `
    }
]

const ProductPage = ()=>{
    const email = localStorage.getItem('email')

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const handleLogOut =()=>{
        localStorage.removeItem('email')    
        localStorage.removeItem('password')
        window.location.href = '/login'
    }

    useEffect(()=>{
        // console.log('ccc ', JSON.parse(localStorage.getItem("cart")))
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    },[])

    const totalPriceRef = useRef(null);

    useEffect(()=>{
        if(cart.length>0){
            console.log(1)
            totalPriceRef.current.style.display = 'table-row'
        }else{
            console.log(2)
            totalPriceRef.current.style.display = 'none'
            console.log('dsa ',  totalPriceRef.current.style)
        }
    },[cart])

    useEffect(()=>{
        if(cart.length > 0){
            const sum = cart.reduce((acc, item)=>{
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
            },0)
            setTotalPrice(sum)
            localStorage.setItem("cart",JSON.stringify(cart))
        }
    },[cart])

    const handleAddtoCart = (id) =>{
        if(cart.find(item=>item.id === id )){
            setCart(
                cart.map(item => item.id === id ? {...item, qty : item.qty + 1 } : item)
            )
        }else{
            setCart([
                ...cart,
                {
                    id,
                    qty : 1
                }
            ])
        }
    }
    const styles = {
        display: 'none',
      };
    return(
        <Fragment>
            <div className="flex  bg-blue-600 h-16 w-fullfont-bold justify-end px-10 text-white items-center">{email} 
                <Button onClick={handleLogOut} classname="ml-5  bg-black">
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-6">
                <div className="flex w-3/4 flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}></CardProduct.Header>
                            <CardProduct.Body  title={product.name}> 
                                {product.description}   
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddtoCart={handleAddtoCart}></CardProduct.Footer>
                        </CardProduct>
                    ))}
                </div>
                <div className="flex w-1/4 flex-col">
                    <span className="text-3xl font-bold  text-blue-600 ml-5">Cart</span>

                    <table className="table-auto border-separate border-spacing-x-5 mt-2">
                        <thead>
                            <tr className="text-left">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item)=>{
                                const product = products.find((product) => product.id === item.id)
                                return(
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp {" "}{product.price.toLocaleString("id-ID", {styles:"currency", currency:'IDR'})}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp {" " +(item.qty * product.price).toLocaleString("id-ID",{styles:"currency", currency:"IDR"})}</td>
                                    </tr>
                                )
                            })}
                            
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}><b> Total Price</b></td>
                                <td>
                                    <b>
                                        Rp{" " +(totalPrice).toLocaleString("id-ID",{styles:"currency", currency:"IDR"})}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <div className="text-xl font-bold text-blue-600">Card</div> */}
                </div>
            </div>
            <div className="flex justify-center">
                {/* <Counter></Counter> */}
            </div>
        </Fragment>
    )
}

export default ProductPage