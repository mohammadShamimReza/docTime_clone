import React from "react";
import Navigation from "../shared/Navigation";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FAQS = () => {
  return (
    <>
      <Navigation />

      <Container>
        <Steps>
          <Qustion>
            <h2>What is DocTime?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              DocTime is an online based medical consultation service where
              doctors consult patients on video calls using DocTime app or
              website. The service is available 24/7 from anywhere.
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>What do we treat?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              Common health issue Ask anything you would normally ask your GP.
              You can have an instant video with one of our GPs via a digital
              consultation from anywhere, at any time of day. Specialist advice
              Sometimes it's helpful to see a specialist when you want. And get
              educational advice, pre-screening, monitoring and follow-ups. For
              maternal and infant health care, chronic diseases such as
              diabetes, or other conditions, DocTime can help you to connect
              with the right specialist doctor and to stay healthy. More than 20
              different specialities are available on DocTime. Mental health and
              wellbeing In a fast paced world, it is important to monitor and
              protect your mental health and wellbeing. Doctors can help you
              stay healthy whether you have symptoms at home or in your
              workplace of stress, smoking, anxiety, bereavement or depression.
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>How does it work?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              Patients can register on our app and are able to take consultation
              from our verified doctors. Consultation is available for the app
              user and their family members. It works in 3 steps: <br />
              - Search for your doctor by speciality and make payment online and
              pay the fees required by the doctor <br />
              - Doctor makes a video call to do the consultation <br />- Doctor
              uploads prescription and you download it
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>Who provides consultation on DocTime?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              Only certified MBBS doctors can provide consultation via the
              DocTime app..
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>Are the registered doctors verified?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              Yes, all our panel of doctors are verified. We verify their
              registration with BMDC, we also check doctors national id /
              passport with selfie to make sure the qualified doctors are
              getting registered.
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>When are the doctors available for consultation?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              Doctors are available according to their time availability. Our
              platform is available 24/7. Any doctor can come online at any time
              if they want.
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>Can we select a doctor of our own choice?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              Yes, certainly, you can select any doctor who is registered in our
              DocTime platform.. When you search for a doctor, we will show you
              all doctors available for your selected speciality. You can
              filter/sort by price and other parameters. When you find the
              doctor you want to get consultation, you can choose that doctor to
              get consultation.
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>How much do I need to pay for the consultation?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              This varies from doctor to doctor. Different doctors have
              different fees. When you search for a doctor we will show you
              their fees. Some doctors may be free available for consultation
              free of charge if they want to.
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>How do I make payment?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              .You can make payment online using bKash, rocket, Debit card,
              credit card.
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>Are there free consultations available?</h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              .If any doctor wants they can set their fess to 0. In this case
              the consultation will be free of charge. You will be able to see
              the doctor's fee in the doctor's search result or doctor's
              profile.
            </p>
          </Answer>
        </Steps>
        <Steps>
          <Qustion>
            <h2>
              If I decide to cancel my consultation after making payment, how do
              I get a refund?
            </h2>
            <FontAwesomeIcon icon={faPlus} />
          </Qustion>
          <Answer>
            <p>
              If you decides no to get the consultation before the doctor dial
              you in, we will refund you the money by bKash. We will deduct up
              to 5% payment processing fee. The refund may take up to 10 working
              days..
            </p>
          </Answer>
        </Steps>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 800px;
  margin: 150px auto 200px auto;
`;

const Steps = styled.div`

`;
const Qustion = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Answer = styled.div`
  display: none;
`;

export default FAQS;
