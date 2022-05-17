import React from 'react';
import styled from 'styled-components';


const Navigation = () => {
    return (
        <Container>
            <Wrap>
                <img src="" alt="" />
            </Wrap>
            <Manu>
                <a href="/#">How DocTime Works</a>
                <a href="/#">ForDoctors</a>
                <a href="/#">DocTime for Enterprises</a>
                <a href="/#">About Us</a>
                <a href="/#">FAQs</a>
            </Manu>
        </Container>
    );
};

const Manu = styled.div`
    text-align: right;
    a {
        text-decoration: none;
    }
`
const Container = styled.div`

`;
const Wrap = styled.div`
    
`;


export default Navigation;