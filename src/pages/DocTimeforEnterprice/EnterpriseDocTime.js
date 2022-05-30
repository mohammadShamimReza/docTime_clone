import React from 'react';
import styled from 'styled-components';
import EnterpricePic from "../../img/EnterprisePic.png"
import Footer from '../shared/Footer';

const EnterpriseDocTime = () => {
    return (
      <>
        <Container>
          <TextArea>
            <h4>Welcome To</h4>
            <br />
            <h1>DocTime enterprise healthcare program</h1>
            <br />
            <br />
            <br />
            <p>
              DocTime is an online medical service app (Telemedicine) where
              patients can get doctor consultations on video call and can get
              instant online prescriptions.
              <br /> We have launched this product aiming to the benefits of
              both Employers and Employees at WIN - WIN basis. We offer
              employees to collaborate with us to provide their employers
              unlimited video consultation facilities with doctors for him and
              his family throughout the month at a very cheap rate.
            </p>
            <br />
            <br />
            <br />
            <EnrollButton>Enroll Now</EnrollButton>
          </TextArea>
          <ImageArea>
            <img src={EnterpricePic} alt="" />
          </ImageArea>
        </Container>
        <Footer />
      </>
    );
};

const Container = styled.div`
margin-top: 150px;
    padding: 100px;
    display: flex;
    @media (max-width: 1284px){
        flex-direction: column;
    }
`;
const TextArea = styled.div`
  @media (max-width: 1284px) {
    width: 100%;
  }
  h4 {
    font-size: 29px;
    font-weight: 500;
    color: #0c0b52;
  }
  h1 {
    font-size: 59px;
    font-weight: 500;
    color: #0c0b52;
  }
  width: 1905px;
`;
const EnrollButton = styled.button`
  cursor: pointer;
  width: 250px;
  height: 50px;
  color: black;
  background-color: hsl(195, 100%, 85%);
  font-size: 15px;
  border: none;
  border-radius: 50px;
`;
const ImageArea = styled.div`
  @media (max-width: 1284px) {
    img {
        width: 100%;
    }
  }
`;

export default EnterpriseDocTime;