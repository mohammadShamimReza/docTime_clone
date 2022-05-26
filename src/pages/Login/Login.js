import React from "react";
import styled from "styled-components";
import Navigation from "../shared/Navigation";

const Login = () => {
  return (
    <>
      <Navigation />
      <Container>
        <ImageArea>
          <img src="./images/login_img.png" alt="login_image" />
        </ImageArea>
            <FormArea>
                  
            </FormArea>
      </Container>
    </>
  );
};
const Container = styled.div`
  margin-top: 95px;
`;
const ImageArea = styled.div`
  width: 60%;
  margin: 0 auto 0 auto;
  img {
    width: 700px;
  }
`;
const FormArea = styled.div``;

export default Login;
