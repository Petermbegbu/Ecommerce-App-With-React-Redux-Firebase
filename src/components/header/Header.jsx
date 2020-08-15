import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="menuDiv">
    <span>
      <Link to="/">
        <Logo />
      </Link>
    </span>

    <span className="menuSpan">
      <span className="px-2">
        <Link to="/shop">SHOP</Link>
      </span>
      <span className="px-2">
        <Link to="/shop">CONTACT</Link>
      </span>
      {currentUser ? (
        <span className="pl-2" onClick={() => auth.signOut()}>
          SIGN OUT
        </span>
      ) : (
        <Link className="pl-2" to="/signin">
          SIGN IN
        </Link>
      )}
    </span>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
