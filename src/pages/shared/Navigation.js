import React from 'react';
import styled from 'styled-components';


const Navigation = () => {
    return (
        <Container>
            
            <a href="#default" className="logo"><img src="./images/logo.png" alt="" /></a>
            
            <Manu>
                <a href="/#">How DocTime Works</a>
                <a href="/#">ForDoctors</a>
                <a href="/#">DocTime for Enterprises</a>
                <a href="/#">About Us</a>
                <a href="/#">FAQs</a>
                <a href="/#">LogIN</a>
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
    a:hover {
        
    }
`;

const Manu = styled.div`
        
        margin-top: 2em;
        float: right;
       
        
    
    a {
        @media (max-width: 1285px){
           display: none;
           background-color: red;

        }
    }
    a:hover{
        background-color: #ddd;
        
    }
`;

const ManuWrapper = styled.div`
        
`;

const ManuIcon =styled.div`

    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;

    @media (min-width: 1284px) {
        display: none;
    }

    @media (max-width: 1285px){
        display: block;
    }
`;



export default Navigation;