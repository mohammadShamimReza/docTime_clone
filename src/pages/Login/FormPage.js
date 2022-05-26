import React from "react";
import styled from "styled-components";

const FormPage = () => {
    const handleLoginForm = () => {
      
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
          name="email"
          placeholder="Email or Phone Number"
          id=""
          onBlur={handleOnChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password *"
          id=""
          onChange={handleOnChange}
        />
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

export default FormPage;
