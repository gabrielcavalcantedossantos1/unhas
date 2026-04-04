import React from "react";
import "./Home.css";

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
          <a href="#portfolio" className="cta-button">
            Veja meu Portfólio
          </a>
          <div className="contact-links">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/seu_instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
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
