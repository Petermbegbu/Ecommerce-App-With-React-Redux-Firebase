import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInAndOutPage = () => (
  <div>
    <div className="row pb-5">
      <div className="col-md-5">
        <SignIn />
      </div>
      <div className="col-md-5 offset-md-2">
        <SignUp />
      </div>
    </div>
  </div>
);

export default SignInAndOutPage;
