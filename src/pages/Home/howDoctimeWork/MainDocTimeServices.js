import React from 'react';
import styled from 'styled-components';

const MainDocTimeServices = () => {
    return (
        <Container>
            <Textarea>
                <Texts>
                <h1>Main Doctime Services</h1>
                <p>DocTime is an online medical service app where patients can get 24/7 video consultation from doctors. DocTime uses 256 bit encryption to secure the video consultation. Patient can keep their previous consultation history and view online prescriptions.</p><br /><br /><br />
                <p>Doctor can join the platform using our simple on boarding process. We verify every doctor to make sure only BMDC authorised doctors are providing consultation using latest technologies.</p>
                </Texts>
            </Textarea>
            <ImageArea>
                <img src="./images/man_slep.webp" alt="man_slap" />
            </ImageArea>
        </Container>
            
    );
};

const Container = styled.div`
height: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 190px;
    @media (max-width: 1284px){
        flex-direction: column-reverse;
        justify-content: center;
    align-items: center;
    }
`;
const Textarea = styled.div`
    h1{
        text-align: center;
        color: #0C0B52;
        font-size:59px;
        font-weight: 500;
        line-height: 66.4px;
        width: 100%;
        margin-bottom: 50px;
    }
    p{
        font-size: 17.6px;
        line-height: 26.4px;
        color: #3B4966;
    }
`;

const Texts = styled.div`
    width: 700px;
@media (max-width: 1286px){
    text-align: center;
    width: 500px;
}
`;

const ImageArea = styled.div`
    img {
        width: 400px;
        @media (max-width: 1284px){
        width: 100%;
    }
    }
`;
export default MainDocTimeServices;