import React, { useEffect, useState } from "react";
import ShowFaqs from "./ShowFaqs";
import styled from "styled-components";


const FAQS = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("./faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);
  console.log(faqs);

  return (
    <>
      <Container>
        <HeadingTitle>
          <h1>Frequently asked questions</h1>
        </HeadingTitle>
        {faqs.map((faq) => (
            <ShowFaqs key={faq.id} faq={faq}></ShowFaqs>
          ))}
        
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 944px;
  margin: 100px auto 200px auto;
`;
const HeadingTitle = styled.div`
  height: 142px;
  margin: 0 0 8px 0;
  padding: 48px 0 24 0;
  h1 {
    font-size: 59px;
    font-weight: 500;
    line-height: 70.8px;
    text-align: left;
    color: #0c0b52;
  }
`;


export default FAQS;
