import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vinda ao Studio de Unhas</h1>
          <p>
            Designer profissional de unhas, especializada em manicure e nail
            art. Transforme suas unhas com estilo e elegância.
          </p>
          <Link to="/portfolio" className="cta-button">
            Veja meu Portfólio
          </Link>
          <div className="contact-links">
            <a
              className="whats"
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="whats-icon" size={23} />
              WhatsApp
            </a>
            <a
              className="insta"
              href="https://instagram.com/seu_instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="insta-icon" size={23} />
              Instagram
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop"
            alt="Unhas decoradas"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
