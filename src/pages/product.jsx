import CardProduct from "../components/fragments/CardProduct"

const ProductPage = ()=>{
    return(
        <div className="flex justify-center">
            <CardProduct>
                <CardProduct.Header image="https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1800&t=st=1705508532~exp=1705509132~hmac=621962abb9e3b381da2ffc3a7199cfa1956005eb4ec95f4d94ce8ad3be513e88"></CardProduct.Header>
                <CardProduct.Body  title="Sepatu Baru Alhamdulillah"> 
                    Aliquip aliqua anim dolore dolore ex culpa voluptate aliqua mollit voluptate nisi consectetur. Ea sit veniam esse non deserunt in quis nostrud. Est dolor ut id do eiusmod officia. Commodo duis labore sit aute amet cillum nulla et. Voluptate culpa anim aliquip irure. Aliqua labore officia sunt minim commodo commodo eiusmod in amet qui. Ea id laborum sunt cupidatat.    
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000" btnText="Add To Card"></CardProduct.Footer>
            </CardProduct>
        </div>
    )
}

export default ProductPage