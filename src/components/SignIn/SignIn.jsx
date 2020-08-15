import React, { Component } from "react";
import FormInput from "../Form-Input/FormInput";
import CustomButton from "../Custom-Button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <div className="mb-5">
          <h3>I already have an account</h3>
          <h6>Sign-in with your email and password</h6>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div>
            <FormInput
              type="email"
              name="email"
              value={email}
              required
              handleChange={this.handleChange}
              label="Email"
            />
          </div>
          <div>
            <FormInput
              type="password"
              name="password"
              value={password}
              required
              handleChange={this.handleChange}
              label="Password"
            />
          </div>

          <div className="buttons">
            <CustomButton id="signInBtn" type="submit">
              Sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
