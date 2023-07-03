import { useEffect, useState } from "react"
import '../style/showPageComponents.css'
import fetchData from "../helpers/fetchData"
import ProductCard from "./products/ProductCard"

const ShowPageComponents = () => {
    const [showArticles, getShowArticles] = useState([])

    const productUrl = 'https://fakestoreapi.com/products'

    const bringProducts = async (url) => {
        const response = await fetchData(url)
        console.log(response)
        getShowArticles(response)
    }

    useEffect(() => {
        bringProducts(productUrl)
    }, [])

    return (
        <>
            <section>
                <div className="products">
                    {showArticles.map((product) =>
                        <ProductCard
                            productImage={product.image}
                            productName={product.title}
                            productCategory={product.category}
                            productPrice={product.price}
                        />)}
                </div>
            </section>
        </>
    )
}

export default ShowPageComponents