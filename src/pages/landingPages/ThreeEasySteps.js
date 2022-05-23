import React from 'react';
import styled from 'styled-components'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <img src="./images/phone_mobil" alt="" />
                </ImageArea>
                <TextArea>
                <FontAwesomeIcon icon={faVimeo} />

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

`;
const ImageArea = styled.div`

`;
const TextArea = styled .div`

`;


export default ThreeEasySteps;