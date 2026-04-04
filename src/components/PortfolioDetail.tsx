import React from "react";
import { useParams, Link } from "react-router-dom";
import "./PortfolioDetail.css";

const PortfolioDetail: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const categories = [
    {
      name: "Francesinha",
      price: "R$ 40",
      images: [
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=400&h=400&fit=crop",
      ],
      description:
        "Design clássico francês: ponta branca e base nude para um look elegante e atemporal.",
    },
    {
      name: "Artística",
      price: "R$ 50",
      images: [
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      ],
      description:
        "Nail art criativa e personalizada. De temas simples a designs complexos, transforme suas unhas em verdadeiras obras de arte.",
    },
    {
      name: "Alongamento",
      price: "R$ 80",
      images: [
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=400&fit=crop",
      ],
      description:
        "Alongamento de unhas com fibra de vidro ou gel para unhas mais longas e resistentes. Perfeito para quem busca extensão duradoura.",
    },
  ];

  const selectedCategory = categories.find(
    (cat) => cat.name.toLowerCase() === category?.toLowerCase(),
  );

  if (!selectedCategory) {
    return <div>Categoria não encontrada.</div>;
  }

  return (
    <div className="portfolio-detail">
      <Link to="/portfolio" className="back-link">
        ← Voltar ao Portfólio
      </Link>
      <h1>{selectedCategory.name}</h1>
      <p className="category-description">{selectedCategory.description}</p>
      <p className="detail-price">Preço: {selectedCategory.price}</p>
      <div className="detail-gallery">
        {selectedCategory.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${selectedCategory.name} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetail;
