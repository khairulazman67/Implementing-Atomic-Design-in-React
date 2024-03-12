import { Link } from 'react-router-dom';
import Button from '../elements/buttons/index';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';


const CardProduct = (props)=>{
    const {children} = props
    return(
        <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-ls shadow mx-3 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = (props)=>{
    const {image, id} = props
    return(
        <Link to={`/products/${id}`} >
            <img 
                src={image} alt="" 
                className='p-8 rounded-t-lg h-60 w-full object-cover' 
            />
        </Link>
    )
}

const Body = (props)=>{
    const {children, title} =  props
    return(
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white hover:text-gray-400">
                    {title.substr(0,25)} ...
                </h5>
            </a>
            <p className="text-m text-white pt-4 text-justify">{children.substr(0,100)} ...</p>
        </div>
    )
}

const Footer = (props) =>{
    const {price, id} = props
    const dispatch = useDispatch()
    return(
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp {" "} {price.toLocaleString("id-ID", { styles:"currency", currency:"IDR" })}</span>
            <Button classname="bg-blue-600" onClick={()=>dispatch(addToCart({id, qty:1}))}>
                Add To Card
            </Button>
        </div>
    )
}

CardProduct.Header  = Header
CardProduct.Body    = Body
CardProduct.Footer  = Footer

export default CardProduct