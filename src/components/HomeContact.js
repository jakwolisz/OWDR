import React, {useState} from "react";

import imageDecoration from '../assets/Decoration.svg';
import imageInstagram from '../assets/Instagram.svg';
import imageFacebook from '../assets/Facebook.svg';

const API_URL = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

const HomeContact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessages, setErrorMessages] = useState([]);
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = {};
    let isOk = true;
    if (values.name.length < 2) {
      errors.name = 'Podane imię jest nieprawidłowe!';
      isOk = false;
    }

    if (values.email.length < 3 || !values.email.includes('@')) {
      errors.email = 'Podaj prawidłowy mail!';
      isOk = false;
    }

    if (values.message.length < 120) {
      errors.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
      isOk = false;
    }

    setErrorMessages(errors);

    if (isOk) {
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(response => response.json())
        .then(data => {setStatus(data.status); console.log(data, data.status)})
        .catch(error => console.log('Error: ', error));
    }
  };

  return (
      <>
      <section id="contact">
        <div className="contact_section">
          <div className="contact_content_wrapper">

              <p>Skontaktuj się z nami</p>
              <img alt="decoration" src={imageDecoration} />
              {status === 'success' && <p className="success">Wiadomość została wysłana! Wkrótce się z Tobą skontaktujemy!</p>}

            <form onSubmit={handleSubmit}>
              <div className="contact_form_upper_part">
                <div className="name">
                  <label>Imię:</label>
                  <input type="text" 
                    value={values.name} 
                    name="name" 
                    onChange={handleChange} 
                  />
                  {errorMessages.name && <p className="alert">{errorMessages.name}</p>} 
                </div>
                <div className="email">
                  <label>Email:</label>
                  <input
                    type="Email"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                  />
                  {errorMessages.email && <p className="alert">{errorMessages.email}</p>} 
                </div>
              </div>

              <div className="message">
              <label>Treść wiadomości:</label>
                <textarea
                    value={values.message}
                    name="message"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    onChange={handleChange}
                ></textarea>
                {errorMessages.message && <p className="alert">{errorMessages.message}</p>}
              </div>
              
              <button type="submit">Wyślij</button>

            </form>
          </div>
        </div>

        <div className="contact_section_footer">
            <img alt="facebook" src={imageFacebook} />
            <img alt="instagram" src={imageInstagram} />
        </div>
      </section>
      </>
  );
};

export default HomeContact;
