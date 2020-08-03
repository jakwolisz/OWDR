import React from 'react';
import imageDecoration from '../../assets/Decoration.svg';

const Thanks = ({currentStep}) => {

    if (currentStep !== 6) {
        return null;
    }
 
    return (
        <>
        <div className="thanks">
            <h2>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze.</h2>
            <img alt="decoration" src={imageDecoration} />
        </div>
        </>
    )
}

export default Thanks;