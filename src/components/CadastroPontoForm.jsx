import React, { useState } from 'react';
import '../assets/body.css';
import '../assets/cadastropontoform.css'; // Import the CSS file for styling

const CadastroPontoForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    contact: '',
    location: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Preparar o corpo do e-mail
    const emailBody = `
      Nome: ${formValues.name}\n
      Contato: ${formValues.contact}\n
      Localização: ${formValues.location}\n
      Descrição: ${formValues.description}
    `;
    
    // Abrir o cliente de e-mail com o corpo preenchido
    window.location.href = `mailto:reciclamaisflorianopolis@gmail.com?subject=Novo%20Ponto%20de%20Coleta&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <form className="cadastro-ponto-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="contact"
          placeholder="Contato (e-mail ou telefone)"
          value={formValues.contact}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="location"
          placeholder="Localização do ponto de coleta"
          value={formValues.location}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          placeholder="Descrição ou observação"
          value={formValues.description}
          onChange={handleInputChange}
          rows="5"
        />
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default CadastroPontoForm;
