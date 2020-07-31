import React, { useState, useEffect } from 'react';

const MasterFormStep3 = ({currentStep, form, handleChange, checkbox}) => {

    if (currentStep !== 3) {
        return null;
    }
 
    return (
        <>
        <h2>Lokalizacja:</h2>
        <select name="localization" defaultValue={form.localization} onChange={handleChange}> 
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
        </select>
        <h3>Komu chcesz pomóc:</h3>
        <p>
        <input
              id="dzieciom"
              type="checkbox"
              name="help"
              value="dzieciom"
              onChange={checkbox}
            />
        <label htmlFor="dzieciom">dzieciom</label>
        </p>

        <p>
        <input
              id="samotnym matkom"
              type="checkbox"
              name="help"
              value="samotnym matkom"
              onChange={checkbox}
            />
        <label htmlFor="samotnym matkom">samotnym matkom</label>
        </p>

        <p>
        <input
              id="bezdomnym"
              type="checkbox"
              name="help"
              value="bezdomnym"
              onChange={checkbox}
            />
        <label htmlFor="bezdomnym">bezdomnym</label>
        </p>

        <p>
        <input
              id="niepełnosprawnym"
              type="checkbox"
              name="help"
              value="niepełnosprawnym"
              onChange={checkbox}
            />
        <label htmlFor="niepełnosprawnym">niepełnosprawnym</label>
        </p>

        <p>
        <input
              id="osobom starszym"
              type="checkbox"
              name="help"
              value="osobom starszym"
              onChange={checkbox}
            />
        <label htmlFor="osobom starszym">osobom starszym</label>
        </p>

        
            <label htmlFor="message">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
            <input 
            id="message"
            className="message"
            type="text"
            name="organizationSpecific"
            value={form.organizationSpecific}
            onChange={handleChange}
            />
        

        </>
    )
}

export default MasterFormStep3;