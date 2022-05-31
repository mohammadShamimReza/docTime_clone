import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import UseAuth from "../../Context/AuthContext/UseAuth";
import logoImg from "../../img/logo.png"

const Navigation = () => {
  const {user, logOut} = UseAuth()
  return (
    <>
      <Container>
        <Link to="/">
          <img src={logoImg} alt="log_img" />
        </Link>

        <Manu>
          <Link to="/howdoctime_works">How DocTime Works</Link>
          <Link to="/qualified_Dotor">ForDoctors</Link>
          <Link to="/forEnterprise">DocTime for Enterprises</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/faqs">FAQs</Link>
          {user?.email ? (
            <Link onClick={logOut} to="/login/formpage">
              <Button>LOg Out</Button>
            </Link>
          ) : (
            <Link to="/login/formpage">
              <Button>LOg IN</Button>
            </Link>
          )}
          <ManuWrapper>
            <ManuIcon>
              <div className=""></div>
            </ManuIcon>
            <ManuIcon>
              <div className=""></div>
            </ManuIcon>
            <ManuIcon>
              <div className=""></div>
            </ManuIcon>
          </ManuWrapper>
        </Manu>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.div`
  padding: 0px 25px 0px 25px;
  height: 115px;
  a {
    img {
      width: 300px;
    }
    float: left;
    color: black;
    font-size: 22px;
    padding: 12px;
    border-radius: 12px;
    text-align: center;
    text-decoration: none;
  }
  
`;

const Manu = styled.div`
  margin-top: 2em;
  float: right;
  a:hover {
    background-color: whitesmoke;
  } 
  a {
    @media (max-width: 1285px) {
      display: none;
      background-color: red;
    }
  }
  a:hover {
    background-color: #ddd;
  }
`;

const Button = styled.button`
    font-size: 20px;
  margin-top: -10px;
  cursor: pointer;
  color: white;
  background-image: linear-gradient(
    -45deg,
    RGB(77, 219, 255),
    RGB(0, 184, 230)
  );
  height: 52px;
  width: 200px;
  padding: 14px 0 14px 0;
  border: none;
  border-radius: 50px;
  box-shadow: RGBA(58, 132, 255, 0.5) 0px 6px 10px;
`;

const ManuWrapper = styled.div`
  @media (min-width: 1284px) {
    display: none;
  }

  @media (max-width: 1285px) {
    display: block;
  }
`;

const ManuIcon = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;

 
`;

export default Navigation;
