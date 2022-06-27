import React from 'react'
import classes from './CategoriesBlock.module.scss'
import Container from '../../layout/Container'
import categories from '../../router/categories'

const CategoriesBlock = () => {
  return (
    <Container className={classes['categories']}>
        {categories.map(category => (
            <div className={classes['categories__item']}>
                <img src={category.image} alt="" className={classes['categories__item--img']}/>
                <a href={category.path} className={classes['categories__item--btn']}>{category.text}</a>
            </div>
        ))}
    </Container>
  )
}

export default CategoriesBlock