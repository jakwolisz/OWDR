import React from 'react';
import imageIcon1 from '../../assets/Icon-1.svg';
import imageIcon2 from '../../assets/Icon-4.svg';

const Summary = ({currentStep, form}) => {

    if (currentStep !== 5) {
        return null;
    }
 
    return (
        <>
        <div className="summary">
            <h2>Podsumowanie twojej darowizny</h2>
            <h3>Oddajesz:</h3>
            <div className="upper-part-1">
                            <div>
                                <img className="icon" alt="icon-1" src={imageIcon1} />
                            </div>
                            <div>
                                {form.bagsNumber} worki, {form.toGive}, {form.help}.
                            </div>
            </div>          
            <div className="upper-part-2">          
                            <div>
                                <img className="icon" alt="icon-2" src={imageIcon2} />
                            </div>
                            <div>
                                dla lokalizacji: {form.localization}.
                            </div>
            </div>
            <div className="form_container">
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="title">Adres odbioru:</td>
                        </tr>
                        <tr>
                            <td>
                                <label>Ulica:</label>
                            </td>
                            <td>
                                {form.street}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Miasto:</label>
                            </td>
                            <td>
                                {form.city}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Kod pocztowy:</label>
                            </td>
                            <td>
                                {form.postCode}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Numer telefonu:</label>
                            </td>
                            <td>
                                {form.phoneNumber}
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
                                <label>Data:</label>
                            </td>
                            <td>
                                {form.date}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Godzina:</label>
                            </td>
                            <td>
                                {form.time}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Uwagi dla kuriera:</label>
                            </td>
                            <td>
                            {form.note}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default Summary;