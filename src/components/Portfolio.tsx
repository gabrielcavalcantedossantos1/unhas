import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  const categories = [
    {
      name: "Francesinha",
      price: "R$ 40",
      images: [
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=300&h=300&fit=crop",
      ],
    },
    {
      name: "Artística",
      price: "R$ 50",
      images: [
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
      ],
    },
    {
      name: "Alongamento",
      price: "R$ 80",
      images: [
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=300&h=300&fit=crop",
      ],
    },
  ];

  return (
    <div className="portfolio">
      <h1>Portfólio</h1>
      {categories.map((category, index) => (
        <section key={index} className="category">
          <Link
            to={`/portfolio/${category.name.toLowerCase()}`}
            className="category-link"
          >
            <div className="category-header">
              <h2>{category.name}</h2>
              <p className="category-price">A partir de {category.price}</p>
            </div>
          </Link>
          <div className="gallery">
            {category.images.map((img, i) => (
              <Link
                key={i}
                to={`/portfolio/${category.name.toLowerCase()}`}
                className="image-link"
              >
                <div className="image-container">
                  <img src={img} alt={`${category.name} ${i + 1}`} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
