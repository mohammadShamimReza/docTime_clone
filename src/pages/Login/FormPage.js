import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import UseAuth from "../../Context/AuthContext/UseAuth";

const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginData, setLoginData] = useState({});
  const {logIn, isLoading, error, googleSingIn } = UseAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };
  const handleLoginForm = (e) => {
    logIn(loginData.email, loginData.password, navigate, location);
    e.preventDefault();
  };

  return (
    <Container>
      <h2>Welcome back</h2>
      <br />
      <br />
      <br />
      <h3>Login First</h3>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <FormContainer>
        {!isLoading && (
          <form onSubmit={handleLoginForm}>
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              id="emailId"
              onBlur={handleOnChange}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password *"
              id="PassworkId"
              onChange={handleOnChange}
            />
            <Button type="submit"> logIN</Button>
          </form>
        )}
        {isLoading && <Loading></Loading>}

        {error && <span>{error.massage}</span>}
      </FormContainer>
      <Forget>
        <a href="/*">Forget Password ?</a>
      </Forget>
      <br />
      <br />
      <AuthenticationsGoogle onClick={() => googleSingIn(navigate, location)}>
        Sing in with GOOGLE
      </AuthenticationsGoogle>
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
const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button`
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
