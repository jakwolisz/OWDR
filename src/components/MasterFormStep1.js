import React, { useState, useEffect } from 'react';

const MasterFormStep1 = ({currentStep, handleChange}) => {

    if (currentStep !== 1) {
        return null;
    }
 
    return (
        <>

        <div className="radio-group">
        <label htmlFor="option_1">ubrania, które nadają się do ponownego użycia</label>
        <input
          id="option_1"
          name="toGive"
          type="radio"
          value="option_1" // Prop: The email input data
          onChange={handleChange} // Prop: Puts data into state
        />
        </div>

        <div className="radio-group">
        <label htmlFor="option_2">ubrania, do wyrzucenia</label>
        <input
          id="option_2"
          name="toGive"
          type="radio"
          value="option_2" // Prop: The email input data
          onChange={handleChange} // Prop: Puts data into state
        />
        </div>

        <div className="radio-group">
        <label htmlFor="option_3">zabawki</label>
        <input
          id="option_3"
          name="toGive"
          type="radio"
          value="option_3" // Prop: The email input data
          onChange={handleChange} // Prop: Puts data into state
        />
        </div>

        <div className="radio-group">
        <label htmlFor="option_4">książki</label>
        <input
          id="option_4"
          name="toGive"
          type="radio"
          value="option_4" // Prop: The email input data
          onChange={handleChange} // Prop: Puts data into state
        />
        </div>
        
        <div className="radio-group">
        <label htmlFor="option_5">Inne</label>
        <input
          id="option_5"
          name="toGive"
          type="radio"
          value="option_" // Prop: The email input data
          onChange={handleChange} // Prop: Puts data into state
        />
      </div>

        </>
    )
}

export default MasterFormStep1;