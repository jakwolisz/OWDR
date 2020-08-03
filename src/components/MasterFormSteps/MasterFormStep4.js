import React from 'react';

const MasterFormStep4 = ({currentStep, form, error, handleChange}) => {

    if (currentStep !== 4) {
        return null;
    }
 
    return (
        <>
        <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera:</h2>
        <div className="form_container">
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td className="title">Adres odbioru:</td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="ulica">Ulica:</label>
                        </td>
                        <td>
                            <input
                            id="ulica"
                            type="text"
                            name="street"
                            value={form.street}
                            onChange={handleChange}
                            />
                            <p>{error.street}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="miasto">Miasto:</label>
                        </td>
                        <td>
                            <input
                            id="miasto"
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            />
                             <p>{error.city}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="kod">Kod pocztowy:</label>
                        </td>
                        <td>
                            <input
                            id="kod"
                            type="text"
                            name="postCode"
                            value={form.postCode}
                            onChange={handleChange}
                            />
                            <p>{error.postCode}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="numer">Numer telefonu:</label>
                        </td>
                        <td>
                            <input
                            id="numer"
                            type="text"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            />
                             <p>{error.phone}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td className="title">Termin odbioru:</td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="data">Data:</label>
                        </td>
                        <td>
                            <input
                            id="data"
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="godzina">Godzina:</label>
                        </td>
                        <td>
                            <input
                            id="godzina"
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="note">Uwagi dla kuriera:</label>
                        </td>
                        <td>
                            <input
                            id="note"
                            type="note"
                            name="note"
                            value={form.note}
                            onChange={handleChange}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default MasterFormStep4;