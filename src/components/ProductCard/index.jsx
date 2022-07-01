import React, { useState } from 'react'
import classes from './ProductCard.module.scss'
import classNames from 'classnames'
const ProductCard = () => {
  const api = {
    "id": 0,
    "name": "Basket No 1",
    "category": "flowers",
    "images": [
      "https://toshkentgullari.uz/thumb/2/27vEFLnhhAasXn51U4ij7Q/400r400/d/img_0105.jpg",
      "https://toshkentgullari.uz/d/img_0107_2.jpg"
    ],
    "price": 50,
    "discount": 100
  }
  const [selected, setSelected] = useState(false)
  const changeSelection  = () => setSelected(!selected)
  const [ image ] = api.images
  return (
    <div className={classes['card']}>
        <img src={image} alt="" className={classes['card__img']} />
        <h3 className={classes['card__title']}>{api.name}</h3>
        <p className={classes['card__price']}>{api.price} USD<span className={classes['card__discount']}>{api.discount} USD</span></p>
        <button onClick={changeSelection} className={classNames(classes['card__btn'], selected && classes['card__btn--selected'])}>{selected ? 'Added' : 'Add to card'}</button>
    </div>
  )
}

export default ProductCard