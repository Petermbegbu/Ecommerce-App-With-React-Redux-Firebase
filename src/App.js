import React, { Component } from "react";
import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/header/Header";
import SignInAndOutPage from "./pages/Sign-In-And-Out-Page/SignInAndOutPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/userReducer/userActionCreator";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/userReducer/user-selectors";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser({
          userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndOutPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
