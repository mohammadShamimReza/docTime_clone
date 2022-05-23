import React from 'react';
import styled from 'styled-components'
import { faFutbol, faClock, faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JustInFewTips = () => {
    return (
        <Container>
            <Textarea>
                <span>Get Medical help</span>
                <h2>Just in few step!</h2>
                <Fectures>
                    <Steps>
                        <FontAwesomeIcon icon={faFutbol} size='3x' />
                        <br /><br />
                        <h1>Easy to use</h1>
                        <br />
                        <p>Get the best user experience on DocTime App. Search for a doctor and get an instant consultation.</p>
                        <br />
                        <p>You can join the online queue immediately, while you can continue doing other tasks at home or office</p>
                    </Steps>
                    <Steps>
                        <FontAwesomeIcon icon={faClock} size='3x' />
                        <br /><br />
                        <h1>AnyTime</h1>
                        <br />
                        <p>Talk to a doctor within minutes. Our qualified network of doctors is available 24/7. You can get a consultation and prescription whenever you need. Patients and doctors can keep their previous consultation history and view online prescriptions.</p>
                    </Steps>
                    <Steps>
                        <FontAwesomeIcon icon={faMartiniGlassCitrus} size='3x' />
                        <br />
                        <br />
                        <h1>Trusted</h1>
                        <br />
                        <p>DocTime's experienced doctors, specialists and therapists are selected carefully. Safety and quality is at the heart of everything we do. Each doctor is certified, registered, and operates to the highest clinical standards. DocTime uses 256 bit encryption to secure the video consultation.</p>
                    </Steps>
                </Fectures>
            </Textarea>
            <ImageArea>
                    <img src="./images/fewStepDoctor.jpeg" alt="" />
            </ImageArea>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 85px;
    gap: 90px;
    height: 100%;
    width: 100%;

    @media (max-width: 1284px) {
        flex-direction: column;
        align-items: center;
    justify-content: center;
    }
   
`;
const Textarea = styled.div`
    width: 60%;
    margin-left: 50px;
    span {
        font-size: 16px;
        line-height: 24px;
        color: #2B4966;
        margin-bottom: 5px;
    }
    h2{
        color: #0C0B52;
        font-size: 59px;
        font-weight: 500;
        margin-bottom: 100px;
    margin-top: 20px;
        /* line-height: 70px    ; */
    }
    
    
`;
const Fectures = styled.div`
    overflow: visible;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1284px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;
const Steps = styled.div`
line-height: 24px;
    color: #3B4966;
    height: 500px;
    width: 300px;
    h1{
        color: #4285F4;
    }
    
`;

const ImageArea = styled.div`
    width: 40%;
    img{
        width: 70%;
        @media (max-width: 1248px){
     width: 100%;  
     display: block;
    margin-left: auto;
    margin-right: auto;

    }
    }
    

`;

export default JustInFewTips;