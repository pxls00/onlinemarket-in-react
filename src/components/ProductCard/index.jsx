import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'
import classes from "./ProductCard.module.scss";
import classNames from "classnames";

const ProductCard = ({ card }) => {
  const [selected, setSelected] = useState(false);
  const changeSelection = () => setSelected(!selected);
  const [image] = card.images;
  return (
    <div className={classes["card"]}>
      <img src={image} className={classes["card__img"]} />
      <h3 className={classes["card__title"]}>{card.name}</h3>
      <p className={classes["card__price"]}>
        {card.price} USD
        <span className={classes["card__discount"]}>{card.discount} USD</span>
      </p>
      <button
        onClick={changeSelection}
        className={classNames(
          classes["card__btn"],
          selected && classes["card__btn--selected"]
        )}
      >
        {selected ? "Added" : "Add to card"}
      </button>
      <button className={classes['card__like-btn']}>
          <FontAwesomeIcon icon={faHeartRegular} className={classes['card__like-btn__icon']}/>
      </button>
    </div>
  );
};

export default ProductCard;
