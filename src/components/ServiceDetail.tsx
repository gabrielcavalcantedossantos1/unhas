import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const serviceId = parseInt(id || "0", 10);

  const services = [
    {
      name: "Manicure Básica",
      price: "R$ 30",
      description: "Corte, lixa e esmaltação.",
      details:
        "Serviço completo de manicure básica, incluindo limpeza, corte das unhas, lixamento e aplicação de esmalte. Ideal para manutenção diária.",
      duration: "30 minutos",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
    },
    {
      name: "Francesinha",
      price: "R$ 40",
      description: "Manicure com design francês.",
      details:
        "Manicure clássica com o elegante design francês: ponta branca e base nude. Perfeito para um look sofisticado.",
      duration: "45 minutos",
      image:
        "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=400&h=400&fit=crop",
    },
    {
      name: "Nail Art",
      price: "R$ 50",
      description: "Decoração artística nas unhas.",
      details:
        "Crie designs únicos e personalizados nas suas unhas. De temas simples a complexos, transforme suas unhas em obras de arte.",
      duration: "1 hora",
      image:
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=400&fit=crop",
    },
    {
      name: "Alongamento",
      price: "R$ 80",
      description: "Aplicação de unhas postiças.",
      details:
        "Alongamento de unhas com fibra de vidro ou gel. Ideal para quem deseja unhas mais longas e resistentes.",
      duration: "1 hora e 30 minutos",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    },
  ];

  const service = services[serviceId];

  if (!service) {
    return <div>Serviço não encontrado.</div>;
  }

  return (
    <div className="service-detail">
      <Link to="/servicos" className="back-link">
        ← Voltar aos Serviços
      </Link>
      <div className="detail-content">
        <img src={service.image} alt={service.name} className="detail-image" />
        <div className="detail-info">
          <h1>{service.name}</h1>
          <p className="price">{service.price}</p>
          <p className="description">{service.description}</p>
          <p className="details">{service.details}</p>
          <p className="duration">
            <strong>Duração:</strong> {service.duration}
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="book-button"
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
