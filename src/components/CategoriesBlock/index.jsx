import React from 'react'
import { Link} from 'react-router-dom'

import classes from './CategoriesBlock.module.scss'
import Container from '../../layout/Container'
import categories from '../../router/categories'

const CategoriesBlock = () => {
  return (
    <Container className={classes['categories']}>
        {categories.map(category => (
            <div className={classes['categories__item']} key={category.text}>
                <img src={category.image} alt="" className={classes['categories__item--img']}/>
                <Link to={category.path} className={classes['categories__item--btn']}>{category.text}</Link>
            </div>
        ))}
    </Container>
  )
}

export default CategoriesBlock