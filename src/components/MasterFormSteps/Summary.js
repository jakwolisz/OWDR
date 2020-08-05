import React, { useContext } from 'react';
import imageIcon1 from '../../assets/Icon-1.svg';
import imageIcon2 from '../../assets/Icon-4.svg';

const Summary = ({currentStep, form}) => {

    if (currentStep !== 5) {
        return null;
    }
 
    return (
        <>
        <div className="summary">
            <strong>Podsumowanie twojej darowizny</strong>
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
                                <label>{form.street}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Miasto:</label>
                            </td>
                            <td>
                                <label>{form.city}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Kod pocztowy:</label>
                            </td>
                            <td>
                                <label>{form.postCode}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Numer telefonu:</label>
                            </td>
                            <td>
                                <label>{form.phoneNumber}</label>
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
                                <label>{form.date}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Godzina:</label>
                            </td>
                            <td>
                                <label>{form.time}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Uwagi dla kuriera:</label>
                            </td>
                            <td>
                                <label>{form.note}</label>
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