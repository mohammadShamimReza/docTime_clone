import React from 'react';
import styled from 'styled-components';

const FormPage = () => {
    const handleLoginForm = () => {

    }
    return (
        <Container>
            <h2>Login</h2>
            <form onSubmit={handleLoginForm}>
                <label for="email">Email</label>
                <input type="email" name="email" placeholder='Please Enter Your Email' id="" />
            </form>
        </Container>
    );
};

const Container = styled.div`
    h2 {
        font-size: 22.5px;
        font-weight: 500;
        line-height: 27px;
        color: #212529;
    }
`;

export default FormPage;