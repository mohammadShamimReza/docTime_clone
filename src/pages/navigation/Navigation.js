import React from 'react';
import styled from 'styled-components';


const Navigation = () => {
    return (
        <Container>
            
            <a href="#default" class="logo"><img src="./images/logo.png" alt="" /></a>
            
            <Manu>
                <a href="/#">How DocTime Works</a>
                <a href="/#">ForDoctors</a>
                <a href="/#">DocTime for Enterprises</a>
                <a href="/#">About Us</a>
                <a href="/#">FAQs</a>
                <a href="/#">LogIN</a>
            </Manu>
        </Container>
    );
};


const Container = styled.div`  
    height: 115px;
    background-color: yellow;
    a {
        img {
            overflow: hidden;
            width: 300px;
            background-color: blue;
        }
        float: left;
        color: black;
        padding: 12px;
        border-radius: 12px;
        text-align: center;
        text-decoration: none;
    }
    a:hover {
        background-color: #ddd;
    }
`;

const Manu = styled.div`
    a {
        float: right;
    }
`



export default Navigation;