import { Fragment, useEffect, useState, useRef } from "react"
import CardProduct from "../components/fragments/CardProduct"

import Counter from './counter';
import { getProducts } from "../services/product.service";
import TableCart from "../components/fragments/TableCart";
import Navbar from "../components/layouts/Navbar";

const ProductPage = ()=>{
    

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts((data)=>{
            setProducts(data)
        })
    },[])

    const styles = {
        display: 'none',
      };
    return(
        <Fragment>
                 <Navbar/>
            <div className="flex justify-center py-6">
                <div className="flex w-3/4 flex-wrap">
                    {products.length>0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
                            <CardProduct.Body  title={product.title}> 
                                {product.description}   
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id}></CardProduct.Footer>
                        </CardProduct>
                    ))}
                </div>
                <div className="flex w-1/4 flex-col">
                    <span className="text-3xl font-bold  text-blue-600 ml-5">Cart</span>
                    <TableCart products={products}></TableCart>

                   
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