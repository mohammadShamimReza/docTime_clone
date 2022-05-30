import React from 'react';
import styled from "styled-components";
import { faEnvelope, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import logo from "../../img/logo.png";
import play from "../../img/downloadapp.png";
import appStore from "../../img/appStore.png";
import Browser from "../../img/onBrowser.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <Container>
        <Contract>
          <img src={logo} alt="" />
          <h1>
            <FontAwesomeIcon icon={faPhone} size="1x" /> 091368744
          </h1>
          <p>
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="balck" />{" "}
            support@doctime.com.bd
          </p>
          <FontAwesomeIcon icon={faFacebook} size="3x" color="blue" />
          <FontAwesomeIcon icon={faTwitter} size="3x" color="skyblue" />
          <FontAwesomeIcon icon={faYoutube} size="3x" color="red" />
          <FontAwesomeIcon icon={faInstagram} size="3x" color="pink" />
        </Contract>
        <About>
          <Link to="/aboutUs"> About Us</Link>
          <Link to="/howdoctime_works">How DocTime Works</Link>
          <Link to="/feactures">Feactures</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contactus">Contact Us</Link>
        </About>
        <span></span>
        <ForDoctors>
          <Link to="/qualified_Dotor">ForDoctors</Link>
          <Link to="/forEnterprise">DocTime for Enterprises</Link>
          <Link to="/condition">Terms & conditions</Link>
          <Link to="/privicy">Privacy Policy</Link>
          <Link to="/faqs">FAQs</Link>
            </ForDoctors>
            <span></span>
        <AppSite>
          <h2>Download our app</h2>
          <img src={play} alt="" />
          <img src={appStore} alt="" />
          <img src={Browser} alt="" />
        </AppSite>
      </Container>
    );
};

const Container = styled.div`
  font-size: 17.6px;
  line-height: 26.4px;
  color: #3b4966;
  padding: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  /* margin-left: auto;
    margin-right: auto; */
  background-color: whitesmoke;
  height: 400px;
  p {
      margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const Contract = styled.div`
  font-size: 17.6px;
  line-height: 26.4px;
  color: #3b4966;
  width: 25%;
  img {
    width: 250px;
    margin-bottom: 20px;
  }
`;
const About = styled.div`
  a {
    text-decoration: none;
    font-size: 17.6px;
    line-height: 26.4px;
    color: #3b4966;
  }
  font-size: 17.6px;
  line-height: 26.4px;
  color: #3b4966;
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ForDoctors = styled.div`
  a {
    text-decoration: none;
    font-size: 17.6px;
    line-height: 26.4px;
    color: #3b4966;
  }
  
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AppSite = styled.div`
  width: 25%;
   img {
    width: 200px;
  }
`;
export default Footer;