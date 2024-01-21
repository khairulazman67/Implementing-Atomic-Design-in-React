import Button from '../elements/buttons/index';

const CardProduct = (props)=>{
    const {children} = props
    return(
        <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-ls shadow mx-3 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = (props)=>{
    const {image} = props
    return(
        <a href="" >
            <img 
                src={image} alt="" 
                className='p-8' 
            />
        </a>
    )
}

const Body = (props)=>{
    const {children, title} =  props
    return(
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h5>
            </a>
            <p className="text-m text-white pt-4 text-justify">{children}</p>
        </div>
    )
}

const Footer = (props) =>{
    const {price, handleAddtoCart, id} = props
    return(
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp {" "} {price.toLocaleString("id-ID", { styles:"currency", currency:"IDR" })}</span>
            <Button classname="bg-blue-600" onClick={()=>handleAddtoCart(id)}>Add To Card</Button>
        </div>
    )
}

CardProduct.Header  = Header
CardProduct.Body    = Body
CardProduct.Footer  = Footer

export default CardProduct