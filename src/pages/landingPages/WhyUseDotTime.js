import React from "react";
import styled from "styled-components";

const WhyUseDotTime = () => {
  return (
    <Container>
      <Textarea>
        <h1>Why Use DocTime ?</h1>
        <ol>
            
          <li>
            Access hundreds of certified and trusted doctors and specialists at
            anytime from anywhere
          </li>
          <br />
          <li>
            Improve your and loved ones' health and wellbeing, without having to
            queue or travel
          </li>
          <span> </span>
          <br />
          <li>
            Access your past consultations and prescriptions at any time, and
            even get your medicine delivered
          </li>
        </ol>
      </Textarea>
      <ImageArea>
        <img src="./images/whyUseKoctimeBG.webp" alt="" />
      </ImageArea>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    height: 100%;
    margin-top: 150px;
    margin-bottom: 100px ;

    @media (max-width: 1285px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Textarea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    h1 {
        font-size: 40px;
        margin-bottom: 50px;
    }

    span {
        height: 8px;
        width: 4px;
        background-color: black;
    }
    
  ol {
  }
`;

const ImageArea = styled.div`
    width: 50%;
    img {
        width: 100%;
        margin-right: 0;
    }
`;

export default WhyUseDotTime;
