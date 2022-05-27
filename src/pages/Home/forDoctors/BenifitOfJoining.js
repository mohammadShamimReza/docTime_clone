import React from "react";
import styled from "styled-components";

const BenifitOfJoining = () => {
  return (
    <Container>
      <TextArea>
        <h2>Benefits of joining</h2>
        <br />
        <br />
        <br />
        <p>
          Doctors can join the platform using our simple on boarding process. We
          verify every doctor to make sure only BMDC authorised doctors are
          providing consultation using our latest technology.
        </p>
        <br />
        <br />
        <p>
          You will be at the forefront of digital healthcare innovations
          providing accessible patient care for all.
        </p>
        <br />
        <br />
        <p>
          You will be working independently, making autonomous medical
          decisions, and supported by our DocTime technical team who are here to
          assist both patient and yourself when you’re on session or outside
          sessions.
        </p>
      </TextArea>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 250px;
  display: flex;
  /* width: px; */
  justify-content: center;
  align-items: center;
`;
const TextArea = styled.div`
  width: 800px;
  h2 {
    font-size: 26px;
    line-height: 28px;
    color: #0c0b52;
  }
  p {
    line-height: 28px;
    color: #3B4966;
  }
`;

export default BenifitOfJoining;
