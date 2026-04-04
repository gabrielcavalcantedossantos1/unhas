import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services: React.FC = () => {
  const services = [
    {
      name: "Manicure Básica",
      price: "R$ 30",
      description: "Corte, lixa e esmaltação.",
    },
    {
      name: "Francesinha",
      price: "R$ 40",
      description: "Manicure com design francês.",
    },
    {
      name: "Nail Art",
      price: "R$ 50",
      description: "Decoração artística nas unhas.",
    },
    {
      name: "Alongamento",
      price: "R$ 80",
      description: "Aplicação de unhas postiças.",
    },
  ];

  return (
    <div className="services">
      <h1>Serviços e Preços</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <Link key={index} to={`/servicos/${index}`} className="service-link">
            <div className="service-item">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="price">{service.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
