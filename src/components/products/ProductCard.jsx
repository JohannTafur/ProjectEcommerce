import '../../style/productCard.css'
import img1 from '../../img/DQ7584-300-1_640.png'

const ProductCard = ({productImage, productName, productCategory, productPrice}) => {
    return (
        <article>
            <div className="productHeader">
                <h2>Nike</h2>
            </div>
            <img className="productImage" src={img1} alt="" />
            <div className="productFooter">
                <h4>Category</h4>
                <h2>$110</h2>
            </div>
        </article>
    )
}

export default  ProductCard