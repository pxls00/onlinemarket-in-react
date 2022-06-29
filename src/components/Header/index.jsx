import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import classes from "./Header.module.scss";
import logo from "../../images/logo.svg";
import categories from "../../router/categories";
import Badge from "../Badge";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <Container className={classes["header__content"]}>
        <Link to={"/"} className={classes["header__logo"]}>
          <img src={logo} alt="" />
        </Link>
        <span className={classes["header__icon-group"]}>
          <FontAwesomeIcon
            icon={faHeart}
            className={classes["header__icon-group--heart"]}
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            className={classes["header__icon-group--bag"]}
          />
        </span>
      </Container>
      <Container className={classes["nav"]}>
        <ul className={classes["nav__list"]}>
          {categories.map((category) => (
            <li className={classes["nav__list--item"]} key={category.text}>
              <Link to={category.path}>{category.text}</Link>
            </li>
          ))}
        </ul>
      </Container>
      <Badge />
    </header>
  );
};

export default Header;
