import React from 'react';
import PropTypes from 'prop-types'

import { ChevronRight } from "react-feather";

import AddToFavoritesBtn from "../AddToFavoritesBtn/AddToFavoritesBtn";

import './singlegiftitem.css';

function SingleGiftItem(props) {
    console.log(props)
    const { gifts } = props
    const gift = gifts[0]

    const src = require("../../media/images/" + gift.id + ".png");
    const price = gift.material.includes("giftcard")
        ? "Från " + gift.price
        : gift.price;

    return (
        <section className="single-gift-container">
            <div className="single-gift-photo-wrap">
                <img
                    src={src}
                    alt={gift.productName}
                    className="grid-photo"
                    style={{ width: "100%" }}
                />
            </div>
            <div className="single-gift-content">
                <h2>{gift.productName}</h2>
                <p>{price}kr</p>
                <p>{gift.description}</p>
                <div className="control-btns">
                    <AddToFavoritesBtn gift={gift} />
                    <a href={gift.href} target="_blank" className="btn-link">
                        Gå till butik<ChevronRight color="grey" size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}

SingleGiftItem.propTypes = {
    gifts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            interest: PropTypes.array.isRequired,
            personality: PropTypes.array.isRequired,
            material: PropTypes.array.isRequired,
            receiver: PropTypes.array.isRequired
        })
    )
};

export default SingleGiftItem;