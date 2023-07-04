import '../../style/productCard.css'

const ProductCard = ({ productImage, productName, productCategory, productPrice }) => {
    return (
        <article>
            <div className="productHeader">
                <h1>{productName}</h1>
            </div>
            <div className="imageContainer">
                <img className="productImage" src={productImage} alt="" />
            </div>
            <div className="productFooter">
                <p>{productCategory}</p>
                <h1>${productPrice}</h1>
            </div>
        </article>
    )
}

export default ProductCard