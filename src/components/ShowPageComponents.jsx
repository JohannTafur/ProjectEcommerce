import { useEffect, useState } from "react"
import '../style/showPageComponents.css'
import fetchData from "../helpers/fetchData"
import ProductCard from "./products/ProductCard"
import Categories from "./products/Categories"

const ShowPageComponents = () => {
    const [showProducts, getShowProducts] = useState([]);
    const [showCategories, getShowCategories] = useState([]);

    const productUrl = 'https://fakestoreapi.com/products'
    const categoriesUrl = 'https://fakestoreapi.com/products/categories'

    const bringProducts = async (url) => {
        const response = await fetchData(url)
        console.log(response)
        getShowProducts(response)
    }

    const bringCategories = async (url) => {
        const response = await fetchData(url)
        console.log(response)
        getShowCategories(response)
    }

    useEffect(() => {
        bringProducts(productUrl)
        bringCategories(categoriesUrl)
    }, [])

    return (
        <div className="ContendedFromTheStore">
            <nav className="productFilters">
                <h2>Categories</h2>
                <ul>
                    {showCategories.map((category) =>
                        <Categories
                            categoryName={category}
                        />
                    )}
                </ul>
            </nav>

            <section className="products">
                {showProducts.map((product) =>
                    <ProductCard
                        productImage={product.image}
                        productName={product.title}
                        productCategory={product.category}
                        productPrice={product.price}
                    />)}
            </section>
        </div>
    )
}

export default ShowPageComponents