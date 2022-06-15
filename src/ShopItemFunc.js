import React from "react";

export default function ShopItemFunc (props) {
    const {item} = props;
    const {brand, title, description, descriptionFull, price, currency} = item;

    let itemElement = <div className="main-content">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="description">
                {descriptionFull}
            </div>
            <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{price}{currency}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    
    return itemElement
}