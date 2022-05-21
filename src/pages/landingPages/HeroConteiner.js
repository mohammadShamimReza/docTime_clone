import React from 'react';
import styled from 'styled-components';


const HeroConteiner = () => {
    return (
        <Container>
            <TextSite>
                <h1>Instant video consultation from the best Doctors</h1>
                <p>Download and register on our app for free safe for all your family</p>

                <Button>
                    <a href="/#">Find a doctor now</a>
                </Button>
                <hr />
                <span>a</span>
                <hr />
                <DownloadGoogle>
                    <a href="/#">
                        <span>Download on the</span>
                        <h3>Google Play</h3>
                    </a>
                </DownloadGoogle>
                <DownloadAppale>
                    <a href="/#">
                        <span>Download on the</span>
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
    padding: 0px 25px 0px 25px;
    height: 500px;
`;
const TextSite = styled.div`

`;

const Button =styled.button`

`;

const DownloadGoogle =styled.button`

`;

const DownloadAppale =styled.button`
    
`;

const ImageSite = styled.div`
    img {
        width: 100vh;
    }

`;

export default HeroConteiner;