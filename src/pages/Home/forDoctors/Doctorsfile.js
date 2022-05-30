import React from 'react';
import Footer from '../../shared/Footer';
import BenifitOfJoining from './BenifitOfJoining';
import QualifiedDoctor from './QualifiedDoctor';

const Doctorsfile = () => {
    return (
        <>
            <QualifiedDoctor /> 
            <BenifitOfJoining />
            <Footer />
        </>
    );
};

export default Doctorsfile;