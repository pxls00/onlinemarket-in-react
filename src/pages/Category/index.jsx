import React from 'react'
import { useParams} from 'react-router-dom'
import Header from '../../components/Header'
import Container from '../../layout/Container'

const Category = () => {
  const params = useParams()
  return (
    <>
      <Header />
      <Container>
          
      </Container>
    </>
  )
}

export default Category