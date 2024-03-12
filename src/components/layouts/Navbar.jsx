import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from '../elements/buttons/index';
import { useSelector } from "react-redux";

const Navbar = () =>{
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    useEffect(()=>{
        const sum = cart.reduce((acc,item)=>{
            return acc + item.qty
        },0)
        setTotalCart(sum)
    },[cart])

    const handleLogOut =()=>{
        localStorage.removeItem('token')    
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    return(
        <div className="flex  bg-blue-600 h-16 w-fullfont-bold justify-end px-10 text-white items-center">
            {username} 
            <Button onClick={handleLogOut} classname="ml-5  bg-black">
                Logout
            </Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                {totalCart}
            </div>
        </div>
    )
}

export default Navbar