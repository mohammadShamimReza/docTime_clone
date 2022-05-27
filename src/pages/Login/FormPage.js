import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormPage = () => {
  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleGoogleAuthentation = (e) => {
    e.preventDefault();
    console.log('this is auth')
  }
  return (
    <Container>
      <h2>Welcome back</h2>
      <br />
      <br />
      <br />
      <h3>Login</h3>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <FormContainer>
        <form onSubmit={handleLoginForm}>
          <input
            type="email"
            name="Email"
            placeholder="Email or Phone Number"
            id="emailId"
            onBlur={handleOnChange}
          />
          <br />
          <br />
          <input
            type="password"
            name="Password"
            placeholder="Password *"
            id="PassworkId"
            onChange={handleOnChange}
          />
          <Input type="submit" value="Submit" />
        </form>
      </FormContainer>
      <Forget>
        <a href="/*">Forget Password ?</a>
      </Forget>
      <br />
      <br />
      <AuthenticationsGoogle onClick={handleGoogleAuthentation}>Sing in with GOOGLE</AuthenticationsGoogle>
      <Register>
        <h4>
          Don't have an account?{" "}
          <span>
            <Link to="/login/register">Register</Link>
          </span>
        </h4>
      </Register>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    margin-top: 0px;
    text-align: left;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    color: #4285f4;
  }
  margin-top: 50px;
  width: 542px;
  h3 {
    font-size: 22.5px;
    font-weight: 500;
    line-height: 27px;
    color: #212529;
  }
`;
const FormContainer = styled.div`
  input {
    width: 542px;
    height: 40px;
    padding: 5px 4px 4px 16px;
    border: 1px solid #b4cdf9;
    border-radius: 6px;
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
  }
  input:hover {
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
  }
`;

const Input = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`
  margin-top: 40px;
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
  box-shadow: RGBA(58, 132, 255, 0.5) 0px 6px 10px;
`;

const Forget = styled.div`
  margin-top: 40px;
  a {
    color: black;
  }
  text-align: right;
`;

const AuthenticationsGoogle = styled.button`
  cursor: pointer;
  width: 250px;
  height: 50px;
  color: black;
  background-color: hsl(195, 100%, 85%);
  font-size: 15px;
  border: none;
  border-radius: 50px;
`;

const Register = styled.div`
  margin-top: 60px;
  h4 {
    font-size: 15px;
    line-height: 22.5px;
  }
  a {
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    color: #ff6a9c;
    text-decoration: none;
  }
`;

export default FormPage;
