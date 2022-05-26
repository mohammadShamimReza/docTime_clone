import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ShowFaqs = ({ faq }) => {
    const { question, answer } = faq;
    const [show, setShow] = useState(false);
  return (
    <Steps>
      <Question onClick={() => setShow(!show)}>
              <h2>{question}</h2>
              {
                  show ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />
              }
          </Question>
      
        
          <Answer>
              {show && <p>{answer}</p>}
          </Answer>
    </Steps>
  );
};

const Question = styled.div`
  height: 30px;
  cursor: pointer;
  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: #0c0b52;
  }
  display: flex;
  justify-content: space-between;
`;
const Answer = styled.div`
p {
    color: #212529;
    line-height: 24px;
}
  margin-bottom: 20px;
`;
const Steps = styled.div`
  border-bottom: 1px solid #dee4ff;
`;
export default ShowFaqs;
