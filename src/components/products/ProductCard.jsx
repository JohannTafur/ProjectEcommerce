const ProductCard = ({productImage, productName, productCategory, productPrice}) => {
    return (
        <>
            <div className="productHeader">
                <h2>Prodct Name</h2>
            </div>
            <img className="productImage" src="" alt="" />
            <div className="productFooter">
                <h4>Product Category</h4>
                <h2>Product Price</h2>
            </div>
        </>
    )
}

export default  ProductCard