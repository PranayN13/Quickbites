import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "../Layout/Header.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <header className={`${classes.header} ${classes.mobileHeader}`}>
        <img
          className={classes["logo"]}
          src={logo}
          alt=""
          onClick={() => navigate("/")}
        />
        <div className={classes.cartButtonContainer}>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
      <div className={classes["hero-section"]}>
        <div className={classes["hero-left"]}>
          <h1>Fresh from the Kitchen, just how you want it.</h1>
          <p>
            Savor the convenience of your favorite snacks delivered to your
            doorstep with our fast and delicious online cafe
          </p>
        </div>
        <div className={classes["hero-right"]}>
          <button onClick={() => navigate("/meals")}>View Menu</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
