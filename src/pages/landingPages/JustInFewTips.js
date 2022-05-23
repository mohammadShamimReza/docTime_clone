import React from 'react';
import styled from 'styled-components'
import { faFutbol, faClock, faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JustInFewTips = () => {
    return (
        <Container>
            <Textarea>
                <span>Get Medical help</span>
                <h1>Just in few step!</h1>
                <Fectures>
                    <Steps>
                        <FontAwesomeIcon icon={faFutbol} size='3x' />
                        <h1>Easy to use</h1>
                        <p>Get the best user experience on DocTime App. Search for a doctor and get an instant consultation.</p>
                        <p>You can join the online queue immediately, while you can continue doing other tasks at home or office</p>
                    </Steps>
                    <Steps>
                        <FontAwesomeIcon icon={faClock} size='3x' />
                        <h1>AnyTime</h1>
                        <p>Talk to a doctor within minutes. Our qualified network of doctors is available 24/7. You can get a consultation and prescription whenever you need. Patients and doctors can keep their previous consultation history and view online prescriptions.</p>
                    </Steps>
                    <Steps>
                        <FontAwesomeIcon icon={faMartiniGlassCitrus} size='3x' />
                        <h1>Trusted</h1>
                        <p>DocTime's experienced doctors, specialists and therapists are selected carefully. Safety and quality is at the heart of everything we do. Each doctor is certified, registered, and operates to the highest clinical standards. DocTime uses 256 bit encryption to secure the video consultation.</p>
                    </Steps>
                </Fectures>
            </Textarea>
            <ImageArea>

            </ImageArea>
        </Container>
    );
};

const Container = styled.div`

`;
const Textarea = styled.div`

`;
const Fectures = styled.div`

`;
const Steps = styled.div`

`;

const ImageArea = styled.div`

`;

export default JustInFewTips;