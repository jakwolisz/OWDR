import React, {useState, useEffect} from "react";

import imageDecoration from '../assets/Decoration.svg';

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
      errors.name = 'Name should be at least 2 characters long.';
      isOk = false;
    }

    if (values.email.length < 3 || !values.email.includes('@')) {
      errors.email = 'Email should be valid.';
      isOk = false;
    }

    if (values.message.length < 120) {
      errors.message = 'Message should be at least 120 characters long.';
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
      <div className="contact_section_left">
      </div>
      <div className="contact_section_right">
      <div className="content_wrapper">
              <p>Skontaktuj się z nami</p>
              <img alt="decoration" src={imageDecoration} />
              {errorMessages.name && <div className="alert alert-danger">{errorMessages.name}</div>} 
              {errorMessages.email && <div className="alert alert-danger">{errorMessages.email}</div>} 
              {errorMessages.message && <div className="alert alert-danger">{errorMessages.message}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input
            type="text"
            className="form-control"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="Email"
            className="form-control"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
        </label>

        <label>
          Treść wiadomości:
          <textarea
            className="form-control"
            value={values.message}
            name="message"
            onChange={handleChange}
          ></textarea>
        </label>

        <button className="btn btn-primary" type="submit">
          Wyślij
        </button>
      </form>

      {status === 'success' && <div className="alert alert-success">Operation completed!</div>}
          </div>
      </div>
      </>
  );
};

export  default HomeContact;
