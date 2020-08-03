import React from 'react';

const MasterFormStep1 = ({currentStep, handleChange}) => {

    if (currentStep !== 1) {
        return null;
    }
 
    return (
        <>
        <h2>Zaznacz co chcesz oddać:</h2>
        <div className="radio-group">
        <input
          id="option_1"
          name="toGive"
          type="radio"
          value="ubrania, które nadają się do ponownego użycia"
          onChange={handleChange} 
        />
         <label htmlFor="option_1">ubrania, które nadają się do ponownego użycia</label>
        </div>

        <div className="radio-group">
        <input
          id="option_2"
          name="toGive"
          type="radio"
          value="ubrania, do wyrzucenia" 
          onChange={handleChange} 
        />
         <label htmlFor="option_2">ubrania, do wyrzucenia</label>
        </div>

        <div className="radio-group">
        <input
          id="option_3"
          name="toGive"
          type="radio"
          value="zabawki" 
          onChange={handleChange}
        />
        <label htmlFor="option_3">zabawki</label>
        </div>

        <div className="radio-group">
        <input
          id="option_4"
          name="toGive"
          type="radio"
          value="książki" 
          onChange={handleChange}
        />
         <label htmlFor="option_4">książki</label>
        </div>
        
        <div className="radio-group">
        <input
          id="option_5"
          name="toGive"
          type="radio"
          value="Inne" 
          onChange={handleChange}
        />
        <label htmlFor="Inne">Inne</label>
      </div>

        </>
    )
}

export default MasterFormStep1;