import React from "react";
import styled from "styled-components";
import Navigation from "../shared/Navigation";
import FormPage from "./FormPage";

const Login = () => {
  return (
    <>
      <Navigation />
      <Container>
        <ImageArea>
          <img src="./images/login_img.png" alt="login_image" />
        </ImageArea>
        <FormArea>
          <h2>Welcome back</h2>
                  <FormPage />
            </FormArea>
      </Container>
    </>
  );
};
const Container = styled.div`
  margin-top: 95px;
  display: flex;
`;
const ImageArea = styled.div`
  width: 60%;
  /* margin: 0 auto 0 auto; */
  img {
    width: 900px;
    @media (max-width: 1286px){
      width: 50%;
    }
  }
`;
const FormArea = styled.div`
  h2 {
    text-align: right;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    color: #4285F4;
  }
`;

export default Login;
