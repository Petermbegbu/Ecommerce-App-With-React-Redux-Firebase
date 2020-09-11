import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../Cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/userReducer/user-selectors";

const Header = ({ currentUser, hidden }) => (
  <div>
    <div className="menuDiv row">
      <div className="col-md-4">
        <span>
          <Link to="/">
            <Logo />
          </Link>
        </span>
      </div>

      <div className="col-md-4 menuRightDiv">
        <span className="px-2">
          <Link to="/shop">SHOP</Link>
        </span>
        <span className="px-2">
          <Link to="/shop">CONTACT</Link>
        </span>
        {currentUser ? (
          <span className="pl-2 pointer" onClick={() => auth.signOut()}>
            SIGN OUT
          </span>
        ) : (
          <Link className="pl-2 pointer" to="/signin">
            SIGN IN
          </Link>
        )}
        <span>
          <CartIcon />
        </span>
      </div>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
