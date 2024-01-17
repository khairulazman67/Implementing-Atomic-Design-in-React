import CardProduct from "../components/fragments/CardProduct"

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
    return(
        <div className="flex justify-center">
            {products.map((product,i) => (
                <CardProduct key={i}>
                    <CardProduct.Header image={product.image}></CardProduct.Header>
                    <CardProduct.Body  title={product.name}> 
                        {product.description}   
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductPage