import React, { useState } from 'react'
// import { useParams} from 'react-router-dom'
import Header from '../../components/Header'
import Container from '../../layout/Container'
import ProductCard from '../../components/ProductCard'
import classes from './Category.module.scss'
const Category = () => {

  return (
    <>
      <Header />
      <Container className={classes['card-block']}>
        <ProductCard />
      </Container>
    </>
  )
}

export default Category