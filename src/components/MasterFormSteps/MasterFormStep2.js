import React from 'react';

const MasterFormStep2 = ({currentStep, form, handleChange}) => {

    if (currentStep !== 2) {
        return null;
    }

    return (
        <>
        <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <div className="select-wrapper">
            <label>Liczba 60l worków:</label>
                <select name="bagsNumber" defaultValue={form.bagsNumber} onChange={handleChange}> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </>
    )
}

export default MasterFormStep2;