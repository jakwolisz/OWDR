import React, { useState, useEffect } from 'react';

const MasterFormStep2 = ({currentStep, handleChange}) => {

    if (currentStep !== 2) {
        return null;
    }

    return (
        <>
        <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>

            <select name="bagsNumber" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

        </>
    )
}

export default MasterFormStep2;