import '../../style/productCard.css'
import cardAdd from '../../img/add.png'

import React, { useState } from 'react';

const ProductCard = ({ productName, productImage, productCategory, productPrice }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <article
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="productHeader">
                <h1>{productName}</h1>
                {isHovered && (
                    <button className="hoverButton">
                        <img src={cardAdd} alt="" />
                    </button>
                )}
            </div>
            <div className="imageContainer">
                <img className="productImage" src={productImage} alt="" />
            </div>
            <div className="productFooter">
                <p>{productCategory}</p>
                <h1>${productPrice}</h1>
            </div>
        </article>
    );
};

export default ProductCard;
