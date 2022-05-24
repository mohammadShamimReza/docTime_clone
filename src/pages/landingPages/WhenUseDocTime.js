import React from 'react';
import styled from 'styled-components'

const WhenUseDocTime = () => {
    return (
        <Container>
            <ImageArea>
                <img src="./images/head_pain.webp" alt="" />
            </ImageArea>
            <Textarea>
                <Feactures>
                    <h1>When to use DocTime</h1>
                    <br /><br /><br /><br /><br />
                    <Steps>
                        <h2>Common health issue</h2><br />
                        <p>Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day</p>
                    </Steps>
                    <br /><br /><br />
                    <Steps>
                        <h2>Specialist advice</h2><br />
                        <p>Sometimes it’s helpful to see a specialist when you want. And get educational advice, pre- screening, monitoring and follow-ups. For maternal and infant health care, chronic diseases such as diabetes, or other conditions, DocTime can help you to connect with the right specialist doctor and to stay healthy. More than 20 different specialities are available on DocTime.</p>
                    </Steps>
                    <br /><br /><br />
                    <Steps>
                        <h2>Mental health and wellbeing</h2><br />
                        <p>In a fast paced world, it is important to monitor and protect your mental health and wellbeing. Doctors can help you stay healthy whether you have symptoms at home or in your workplace of stress, smoking, anxiety, bereavement or depression.</p>
                    </Steps>
                </Feactures>
            </Textarea>
        </Container>
    );
};

const Container = styled.div`
display: flex;
gap: 200px;

    @media (max-width: 1284px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-flow: column-reverse
    }

`;
const ImageArea = styled.div`
width: 50%;
    img {
        width: 100%;
      
    }
`;

const Textarea =styled.div`
    width: 50%;
`;
const Feactures = styled.div`
    width: 100%;
    h1{
        font-size: 59px;
        font-weight: 500;
        color: #0C0B59;
    }
`;
const Steps = styled.div`
    width: 400px;
    h2 {
        color: #0C0B59;
    }
    p {
        color: #3B4966;;
    }
`;
export default WhenUseDocTime;