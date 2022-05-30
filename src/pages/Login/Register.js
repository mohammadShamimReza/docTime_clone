import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UseAuth from "../../Context/AuthContext/UseAuth";

const Register = () => {
  const { registerUser } = UseAuth();
  const [registerData, setRegisterData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    e.preventDefault();
  };

  const handleLoginForm = (e) => {
    console.log(e.targer.value)
    registerUser(registerData.name, registerData.email, registerData.password);
    e.preventDefault();
  };
  return (
    <Container>
      <h2>Create account</h2>
      <br />
      <br />
      <br />
      <DoctorButton>
        <h3>Are you doctor?</h3>
        <button>Join now</button>
      </DoctorButton>
      <br />

      <hr />
      <br />

      <h3>Patient Registration</h3>
      <br />
      <br />
      <FormContainer>
        <form onSubmit={handleLoginForm}>
          <NameInput>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              id="firstnameId"
              required
              onBlur={handleOnBlur}
            />
            
          </NameInput>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            id="emailId"
            required
            onBlur={handleOnBlur}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password *"
            id="PassworkId"
            required
            onChange={handleOnBlur}
          />
          <Input type="submit" value="Submit" />
        </form>
      </FormContainer>
      <Terms>
        <h3>Accepting Terms & conditions</h3>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">
          I accept and agree <a href="/*">Terms conditions</a> and{" "}
          <a href="/*">Privacy Policy</a>.
        </label>
      </Terms>
      <Login>
        <h4>
          I have an account?{" "}
          <span>
            <Link to="/login/formpage">Login</Link>
          </span>
        </h4>
      </Login>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  h2 {
    margin-top: 0px;
    text-align: left;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    color: #4285f4;
  }
`;

const FormContainer = styled.div`
  width: 542px;
  h3 {
    font-size: 22.5px;
    font-weight: 500;
    line-height: 27px;
    color: #212529;
  }
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

const NameInput = styled.div`
`;

const DoctorButton = styled.div`
  display: flex;
  gap: 10px;
  button {
    cursor: pointer;
    font-size: 11px;
    text-decoration: none solid rgb(66, 133, 244);
    color: #4285f4;
    height: 26.5px;
    width: 73.0871px;
    border: 1px solid #4285f4;
    border-radius: 50px;
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

const Terms = styled.div`
  margin-top: 40px;
  input {
    margin-right: 9px;
    margin-top: 20px;
  }
  label {
    color: black;
    text-decoration: none;
  }
  a {
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    color: #ff6a9c;
    text-decoration: none;
  }
`;

const Login = styled.div`
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

export default Register;
