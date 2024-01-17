import { Fragment } from "react"
import CardProduct from "../components/fragments/CardProduct"
import Button from '../components/elements/buttons/index';

const products = [
    {
        id          : 1,
        name        : "Sepatu Baru Alhamdulillah",
        price       : "Rp. 1.000.000",
        image       : "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1800&t=st=1705508532~exp=1705509132~hmac=621962abb9e3b381da2ffc3a7199cfa1956005eb4ec95f4d94ce8ad3be513e88",
        description : `Aliquip aliqua anim dolore dolore ex culpa voluptate aliqua mollit voluptate nisi consectetur. Ea sit veniam esse non deserunt 
            in quis nostrud. Est dolor ut id do eiusmod officia. `
    },
    {
        id          : 2,
        name        : "Sepatu Lama Alhamdulillah",
        price       : "Rp. 1.000.000",
        image       : "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1800&t=st=1705508532~exp=1705509132~hmac=621962abb9e3b381da2ffc3a7199cfa1956005eb4ec95f4d94ce8ad3be513e88",
        description : `Aliquip aliqua anim Commodo duis labore sit aute amet cillum nulla et. Voluptate culpa anim aliquip irure. 
        Aliqua labore officia sunt minim  `
    },

    {
        id          : 3,
        name        : "Sepatu Lama Astaghfirullah",
        price       : "Rp. 2.000.000",
        image       : "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1800&t=st=1705508532~exp=1705509132~hmac=621962abb9e3b381da2ffc3a7199cfa1956005eb4ec95f4d94ce8ad3be513e88",
        description : `Aliquip aliqua anim  eiusmod officia. Commodo duis labore sit aute amet cillum nulla et `
    }
]

const ProductPage = ()=>{
    const email = localStorage.getItem('email')
    const handleLogOut =()=>{
        localStorage.removeItem('email')    
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    return(
        <Fragment>
            <div className="flex  bg-blue-600 h-16 w-fullfont-bold justify-end px-10 text-white items-center">{email} 
                <Button onClick={handleLogOut} classname="ml-5  bg-black">
                    Logout
                </Button>
            </div>
            <div className="flex mt-6 justify-center">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}></CardProduct.Header>
                        <CardProduct.Body  title={product.name}> 
                            {product.description}   
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price}></CardProduct.Footer>
                    </CardProduct>
                ))}
            </div>
        </Fragment>
    )
}

export default ProductPage