import React from 'react';
import styled from "styled-components";


const Facilities = () => {
  return (
    <>
      {/* <h1>Services</h1> */}
      <Container>
        <Facility>
          <Number>01</Number>
          <hr />
          <Name>Verified doctors</Name>
          <Description>
            Every doctors on DocTime platform are BMDC certified. We verify
            relevant information before the doctor can consult any patient
          </Description>
        </Facility>
        <Facility>
          <Number>02</Number>
          <hr />
          <Name>Instant video consultation</Name>
          <Description>
            Most of our consultations starts within 10 minutes of making
            payment. The video call is secured by 256 bit encryption
          </Description>
        </Facility>
        <Facility>
          <Number>03</Number>
          <hr />
          <Name>Instant video consultation</Name>
          <Description>
            Most of our consultations starts within 10 minutes of making
            payment. The video call is secured by 256 bit encryption
          </Description>
        </Facility>
        <Facility>
          <Number>04</Number>
          <hr />
          <Name>Instant electronics prescription</Name>
          <Description>
            As soon as the consultation is complete, doctor will provide the
            electronic prescription for the patient to download instantly or
            later.
          </Description>
        </Facility>
        <Facility>
          <Number>05</Number>
          <hr />
          <Name>Instant electronics prescription</Name>
          <Description>
            As soon as the consultation is complete, doctor will provide the
            electronic prescription for the patient to download instantly or
            later.
          </Description>
        </Facility>
        <Facility>
          <Number>06</Number>
          <hr />
          <Name>Easy payment options</Name>
          <Description>
            Patient can make payment online using our secured payment gateway
            partner by bKash, Rocket, Nagad, debit card, credit cards and many
            more.
          </Description>
        </Facility>
        <Facility>
          <Number>07</Number>
          <hr />
          <Name>Easy payment options</Name>
          <Description>
            Patient can make payment online using our secured payment gateway
            partner by bKash, Rocket, Nagad, debit card, credit cards and many
            more.
          </Description>
        </Facility>
        <Facility>
          <Number>08</Number>
          <hr />
          <Name>Better consultation quality</Name>
          <Description>
            Our doctors are committed to provide the best service by spending
            enough time required for the consultation. We constantly improve our
            service from the rating and feedback provided by patients.
          </Description>
        </Facility>
        <Facility>
          <Number>09</Number>
          <hr />
          <Name>Super fast support</Name>
          <Description>
            Our dedicated customer service team is available to assist you
            resolving any issues or answering any queries. We are happy to help.
          </Description>
        </Facility>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 120px;
  margin-top: -50px;
  margin-bottom: 180px;
`;
const Facility = styled.div`
    width: 320px;

`;
const Number = styled.h1`
    color: #0C0B52;
`;
const Name = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 900;
  color: #0C0B52;
`;
const Description = styled.p`
  font-size: 17.6px;
  line-height: 26.4px;
  color: #3B4966;
  margin-top: 15px;
  height: 131px;
`;

export default Facilities;