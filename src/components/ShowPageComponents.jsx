import { useEffect, useState } from "react"
import fetchData from "../helpers/fetchData"
import ProductCard from "./products/ProductCard"

const ShowPageComponents = () => {
    const [showArticles, getShowArticles] = useState({})

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
                {showArticles.map((item) =>
                    <ProductCard
                        productImage={item.image}
                        productName={item.title}
                        productCategory={item.category}
                        productPrice={item.price}
                    />)}

            </section>
        </>
    )
}

export default ShowPageComponents