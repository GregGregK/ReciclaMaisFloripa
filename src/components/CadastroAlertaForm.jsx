import React, { useState } from 'react';
import '../assets/body.css';
import '../assets/CadastroAlertaForm.css'; // Import the CSS file for styling

const CadastroAlertaForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    receiveUpdates: false,
    phone: '',
    notificationMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form className="cadastro-alerta-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="Primeiro nome"
          value={formValues.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Segundo nome"
          value={formValues.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="receiveUpdates"
            checked={formValues.receiveUpdates}
            onChange={handleInputChange}
          />
          Deseja receber novidades pelo e-mail?
        </label>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={formValues.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group-options">
        <p>Eu gostaria de receber uma notificação através de:</p>
        <label>
          <input
            type="radio"
            name="notificationMethod"
            value="whatsapp"
            checked={formValues.notificationMethod === 'whatsapp'}
            onChange={handleInputChange}
          />
          WhatsApp
        </label>
        <label>
          <input
            type="radio"
            name="notificationMethod"
            value="sms"
            checked={formValues.notificationMethod === 'sms'}
            onChange={handleInputChange}
          />
          SMS
        </label>
        <label>
          <input
            type="radio"
            name="notificationMethod"
            value="email"
            checked={formValues.notificationMethod === 'email'}
            onChange={handleInputChange}
          />
          E-mail
        </label>
      </div>
      <button type="submit" className="submit-button">Cadastrar</button>
    </form>
  );
};

export default CadastroAlertaForm;
