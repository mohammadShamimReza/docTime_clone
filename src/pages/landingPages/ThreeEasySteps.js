import React from 'react';
import styled from 'styled-components';

const ThreeEasySteps = () => {
    return (
        <Container>
            <Header>
                <h1>Three easy stepS!</h1>
                <br /><br />
                <p>You don't need to wait physically hours in hospital to see a doctor.
                    <br />
                You can join the online queue immediately, while you can continue doing other tasks at home or office.
                </p>
            </Header>
            <Main>
                <ImageArea>
                    <img src="./images/phone_mobil.jpg" alt="" />
                </ImageArea>
                <TextArea>
                    <Steps>
                        <img src="./images/camera-solid.svg" alt="" />
                        <h1>Search Your Doctor</h1>
                        <p>Search your doctor by specialty or doctor name. Choose the right doctor for you by viewing their profile, rating & experience.</p>
                    </Steps>
                    <Steps>
                    <img src="./images/searchengin-brands.svg" alt="" />
                        <h1>Consult live on VideoCall</h1>
                        <p>Once you pay the required doctor fee, you will be joined to the queue. Doctor will make a secured video call to do the consultation.</p>
                    </Steps>
                    <Steps>
                    <img src="./images/newspaper-solid.svg" alt="" />
                        <h1>Instant Prescription</h1>
                        <p>Once the video consultation is complete, the doctor will upload the prescription. You can download the prescription immediately or later.</p>
                    </Steps>
                </TextArea>
            </Main>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 125px;
    
`;

const Header = styled.div`
    text-align: center;
    
    h1 {
        font-size: 59px;
    font-weight: 500;
    color: #0C0B52;
    }
    p{
        font-size: 17.6px;
        line-height: 26.4px;
        color: #3B4966;
    }
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ImageArea = styled.div`

`;
const TextArea = styled.div`
    width: 50%;
    img {
        width: 50px;
        display: inline;
        background-color: linear-gradient(to right, RGB(41, 108, 166), RGB(43, 169, 237));
    }
`;
const Steps = styled.div``;


export default ThreeEasySteps;