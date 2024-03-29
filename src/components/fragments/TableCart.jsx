import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext"

const TableCart = (props) =>{
    const { products } = props
    const cart = useSelector((state)=> state.cart.data)
    // const [totalPrice, setTotalPrice] = useState(0)
    const dispatch = useTotalPriceDispatch()
    // const totalPrice = 

    const { total } = useTotalPrice()
    console.log('total ',total)

    useEffect(()=>{
        if(products.length>0 &&  cart.length > 0){
            const sum = cart.reduce((acc, item)=>{
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
            },0);
            dispatch({
                type : "UPDATE",
                payload : {
                    total : sum
                }
            });
            // setTotalPrice(sum)
            localStorage.setItem("cart",JSON.stringify(cart))
        }
    },[cart,products])

    const totalPriceRef = useRef(null);
    useEffect(()=>{
        if(cart.length>0){
            totalPriceRef.current.style.display = 'table-row'
        }else{
            totalPriceRef.current.style.display = 'none'
        }
    },[cart])

    return(
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
                {products.length>0 && cart.map((item)=>{
                    const product = products.find((product) => product.id === item.id)
                    return(
                        <tr key={item.id}>
                            <td>{product.title}</td>
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
                            Rp{" " +(total).toLocaleString("id-ID",{styles:"currency", currency:"IDR"})}
                        </b>
                    </td>
                </tr>
            </tbody>
        </table>

    )
}

export default TableCart