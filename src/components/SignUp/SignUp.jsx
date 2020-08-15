import React, { Component } from "react";
import FormInput from "../Form-Input/FormInput";
import CustomButton from "../Custom-Button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div>
        <div className="mb-5">
          <h3>I do not have an account</h3>
          <h6>Sign-Up with your email and password</h6>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              required
              handleChange={this.handleChange}
              label="Name"
            />
          </div>
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
          <div>
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              required
              handleChange={this.handleChange}
              label="Password"
            />
          </div>

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
