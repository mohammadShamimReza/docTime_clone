import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';


const HeroConteiner = () => {
    return (
        <Container>
            <TextSite>
                <h1>Instant video consultation from <br /> the best Doctors</h1>
                <br />
                <br />
                <p>Download and register on our app for free safe for all your family</p>
                <br />
                <br />
                <Button>
                    <a href="/#">Find a doctor now</a>
                </Button>
                <br /><br />
                <hr />
                <span>or</span>
                <hr />
                <br /><br />
                <DownloadGoogle>
                
                    <a href="/#">
                        <span>
                        <FontAwesomeIcon icon={faGooglePlay} size="2x"/>
                             Download on the</span>
                        <h3>Google Play</h3>
                    </a>
                </DownloadGoogle>
                <DownloadAppale>
                    <a href="/#">
                        <span>
                        <FontAwesomeIcon icon={faAppStore} size="2x"/>
                            Download on the</span>
                        <h3>App Store</h3>
                    </a>
                </DownloadAppale>
            </TextSite>
            <ImageSite>
                <img src="./images/HeroImg.webp" alt="" />
            </ImageSite>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 25px 0px 25px;
    height: 500px;

    @media (max-width: 1284px) {
        flex-direction: column;
    }
`;
const TextSite = styled.div`
    padding-top: 205px;
    text-align: center;
    margin: auto;

    h1 {
        font-size: 58px
    }
    

`;

const Button =styled.button`
    cursor: pointer;
    border: 1px solid black;
    border-radius: 74px;
    height: 52px;
    width: 300px;
    background-image: linear-gradient(to right, RGB(5, 183, 242), RGB(33, 150, 252)) ;
    
    a{
        text-decoration: none;
        color: white;
        font-size: 32px
    }
`;

const DownloadGoogle =styled.button`
    background-color: black;
    height: 70px;
    width: 170px;
    border-radius: 7px;
    
    a{
        text-decoration: none;
        color: white;
    }
    span {
        text-align: center;
    }
`;




const DownloadAppale =styled.button`
    background-color: black;
    height: 70px;
    width: 170px;
    border-radius: 7px;
    margin-left: 10px;
    a{
        text-decoration: none;
        color: white;
    }
    
`;

const ImageSite = styled.div`
    width: 70%;

    @media (max-width: 1284px) {
       width: 100%;

       img {
           width: 100%;
       }
    }

    img {
        width: 100%;


    }

`;

export default HeroConteiner;