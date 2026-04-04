import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1>Contato</h1>
      <p>Entre em contato para agendar seu horário ou tirar dúvidas.</p>
      <div className="contact-info">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          WhatsApp: (12) 3456-7890
        </a>
        <a
          href="https://instagram.com/seu_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Instagram: @seu_instagram
        </a>
        <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
      </div>
    </div>
  );
};

export default Contact;
