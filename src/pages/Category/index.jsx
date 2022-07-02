import React, { useState } from "react";
// import { useParams} from 'react-router-dom'
import Header from "../../components/Header";
import Container from "../../layout/Container";
import ProductCard from "../../components/ProductCard";
import classes from "./Category.module.scss";
import { useParams } from "react-router-dom";
const Category = () => {
  const category =  useParams()
  const [data, setData] = useState(null);
  const fetchData = () => {
    fetch(`http://localhost:4000/products?category=${category.category}`)
    .then((req) => req.json()).then(res => {
      setData(res)
      console.log(res);
    })
  }
  return (
    <>
      <Header />
      <Container className={classes["card-block"]}>
        {data && data.map(card => <ProductCard card={card} key={card.id}/>)}
      </Container>
      <button onClick={fetchData}>FetchData</button>
    </>
  );
};

export default Category;
