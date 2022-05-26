import React from "react";
import styled from "styled-components";

const FormPage = () => {
  const handleLoginForm = (e) => {
      e.preventDefault();
      console.log('submitted')
    };
    
    const handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }
  return (
    <Container>
      <h3>Login</h3>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <form onSubmit={handleLoginForm}>
        <input
          type="email"
          name="Email"
          placeholder="Email or Phone Number"
          id=""
          onBlur={handleOnChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="Password"
          placeholder="Password *"
          id=""
          onChange={handleOnChange}
        />
        <Input type="submit" value="Submit" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
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

const Input = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`

  margin-top: 20px;
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

export default FormPage;
