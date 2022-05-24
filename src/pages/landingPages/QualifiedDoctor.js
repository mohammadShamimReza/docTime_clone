import React from 'react';
import styled from 'styled-components';

const QualifiedDoctor = () => {
    return (
       <Constainer>
           <TextArea>
                <h1>Are You a Qualified Doctor</h1>
                <span>Join the forefront of digital healthcare</span><br /><br /><br /><br />
                <p>Join DocTime network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.</p><br /><br /><br />
                <p>Enroll yourself just in minutes!</p><br />
                <a href="/#"><Button>SignUp now</Button></a>
           </TextArea>
           <ImageArea>  
                <img src="./images/doctor_hand_on_phone.webp" alt="doctor-hand-on-fon" />
           </ImageArea> 
       </Constainer>
    );
};

const Constainer = styled.div`
margin-top: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    

`;

const TextArea = styled.div`
    width: 700px; 
    h1 {
        color: #0C0B52;
        font-size:59px;
        font-weight: 500;
        line-height: 66.4px;
        width: 100%;
        margin-bottom: 30px;
    }
    span {
        font-size: 24px;
        color: #0C0B52;
    }
    p{
        font-size: 17.6px;
        line-height: 26.4px;
        color: #3B4966;
    }
`;

const Button = styled.button`
cursor: pointer;
    a {
        text-decoration: none;
        color: white;
    }
    background-image: linear-gradient(-45deg, RGB(77, 219, 255), RGB(0, 184, 230));
    height: 52px;
    width: 200px;
    padding: 14px 0 14px 0;
    border: none;
    border-radius: 50px;
    box-shadow: RGBA(58,132,255,0.5) 0px 6px 10px;
`;
const ImageArea = styled.div`
        img {
        width: 600px;
        @media (max-width: 1284px){
        width: 100%;
    
    }
    }
`;

export default QualifiedDoctor;   