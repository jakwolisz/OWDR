import React from 'react';

const Summary = ({currentStep}) => {

    if (currentStep !== 5) {
        return null;
    }
 
    return (
        <>
        <h2>Podsumowanie twojej darowizny</h2>

        </>
    )
}

export default Summary;