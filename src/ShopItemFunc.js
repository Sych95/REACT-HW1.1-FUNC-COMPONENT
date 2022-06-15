import React from "react";

export default function ShopItemFunc (props) {
    const {item} = props;
    const {brand, title, description, descriptionFull, price, currency} = item;
    console.log(brand, title, description, descriptionFull, price, currency)

    let itemElement = <div class="main-content">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div class="description">
                {descriptionFull}
            </div>
            <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
            <div class="divider"></div>
            <div class="purchase-info">
                <div class="price">{price}{currency}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    
    return itemElement
}