import React from "react";
import "./DailyDose.css";
import Card1 from '../../assets/Card1.png';
import Card2 from '../../assets/Card2.png';
import Card3 from '../../assets/Card3.png';
import Card5 from '../../assets/Card5.png';
import Arrow from '../../assets/Arrow.png';

const DailyDose = () => {
    const cardsData = [
        {
          id: 1,
          title: "Smoothies",
          subtitle: "Blended to Perfection!",
          description: "Indulge in our creamy and refreshing smoothies.",
          backgroundImage: `url(${Card1})`,
          overlay: true,
        },
        {
          id: 2,
          title: "Fresh Juices",
          subtitle: "Sip the Pure Goodness!",
          description: "Experience the natural flavors of fresh juices.",
          backgroundImage: `url(${Card2})`,
          overlay: true,
        },
        {
          id: 3,
          title: "Chocolate Shakes",
          subtitle: "Rich and Creamy!",
          description: "Satisfy your sweet tooth with our chocolate shakes.",
          backgroundImage: `url(${Card3})`,
          overlay: false,
        },
        {
          id: 4,
          title: "Energy Boosts",
          subtitle: "Stay Energized!",
          description: "Fuel your day with our energy-packed drinks.",
          backgroundColor: '#D3DDFF',
          textColor: "#6481E4",
        },
        {
          id: 5,
          title: "Detox Drinks",
          subtitle: "Refresh and Rejuvenate!",
          description: "Cleanse your body with our detox drinks.",
          backgroundImage: `url(${Card5})`,
          overlay: true,
        },
        {
          id: 6,
          title: "Protein Shakes",
          subtitle: "Build and Recover!",
          description: "Power up with our protein-packed shakes.",
          backgroundColor: '#FFF5BA',
          textColor: "#FF3A4D",
        },
        {
            id: 7,
            title: "Craving More? Explore Our Full Menu!",
            
            description: "Our menu is packed with fresh flavors, nutritious blends, and energizing bites. From refreshing juices to protein-packed shakes, find your perfect match now!",
            backgroundColor: '#FDFDFD',
            textColor: "#030303",
          },
      ];
    
      return (
        <div className="container5">
      {/* Header Section */}
      <header className="header">
        <h1>
          Your Daily Dose<br></br> of Freshness Awaits!
        </h1>
      </header>

      {/* Card Section */}
      <div className="card-grid">
        {/* Row 1: Card1, Card2, Card3, Card4 */}
        <div className="row-1">
          {cardsData.slice(0, 4).map((card) => (
            <div
              key={card.id}
              className="card"
              style={{
                backgroundImage: card.backgroundImage,
                backgroundColor: card.backgroundColor,
              }}
            >
              {card.overlay && <div className="overlay"></div>}
              <div
                className="card-content"
                style={{
                  color: card.textColor || "#fff",
                }}
              >
                <h2>{card.title}</h2>
                <h3>{card.subtitle}</h3>
                <p>{card.description}</p>
                <button className="card-button">
                  <img src={Arrow} alt="Arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Card5, Card6, Card7 */}
        <div className="row-2">
          {cardsData.slice(4, 7).map((card) => (
            <div
              key={card.id}
              className="card"
              style={{
                backgroundImage: card.backgroundImage,
                backgroundColor: card.backgroundColor,
              }}
            >
              {card.overlay && <div className="overlay"></div>}
              <div
                className="card-content"
                style={{
                  color: card.textColor || "#fff",
                }}
              >
                <h2>{card.title}</h2>
                <h3>{card.subtitle}</h3>
                <p>{card.description}</p>
                <button className="card-button">
                  <img src={Arrow} alt="Arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      );

};

export default DailyDose;