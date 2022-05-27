import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import loginImg from "../../img/login_img.png";

const Login = () => {
  return (
    <>
      <Container>
        <ImageArea>
          <img src={loginImg} alt="login_image" />
        </ImageArea>
        <FormArea>
              <Outlet />
        </FormArea>
       
      </Container>
    </>
  );
};
const Container = styled.div`
  /* background-color: hsl(195, 25%, 90%); */
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
  margin-top: 180px;
  
`;


export default Login;
