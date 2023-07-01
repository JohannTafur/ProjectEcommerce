import '../../style/productCard.css'

const ProductCard = ({ productImage, productName, productCategory, productPrice }) => {
    return (
        <article>
            <div className="productHeader">
                <h2>{productName}</h2>
            </div>
            <img className="productImage" src={productImage} alt="" />
            <div className="productFooter">
                <h4>{productCategory}</h4>
                <h2>${productPrice}</h2>
            </div>
        </article>
    )
}

export default ProductCard