import React from "react";
import "./Destinations.css";

const WestIndia = () => {
  const states = [
    {
      name: "Rajasthan",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFqYXN0aGFufGVufDB8fDB8fHww",
      content:
        "Rajasthan, the Land of Kings, enchants with its golden deserts and majestic forts. Jaipur's Amber Fort, Jodhpur's Mehrangarh, and Udaipur's lake palaces showcase Rajput grandeur. The Thar Desert offers camel safaris under starlit skies, while Pushkar's sacred lake attracts spiritual seekers. Vibrant culture comes alive in folk dances, colorful attire, and festivals like Desert Festival. Cuisine ranges from dal baati churma to laal maas. Ranthambore National Park provides tiger sightings amidst ancient ruins, making Rajasthan India's most photogenic state.",
    },
    {
      name: "Gujarat",
      image:
        "https://images.unsplash.com/photo-1620103143245-9efb3e4a7553?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3VqYXJhdHxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Gujarat boasts the white desert of Rann of Kutch, Asiatic lions in Gir, and architectural wonders in Ahmedabad. The state's entrepreneurial spirit coexists with ancient stepwells and Jain temples. Dwarka attracts pilgrims, while Modhera's sun temple displays Solanki dynasty artistry. Gujarat's handicrafts include Patola silk and Bandhani textiles. The vegetarian thali and dhokla represent its distinctive cuisine. The International Kite Festival paints vibrant skies, and tribal cultures thrive in the Dang region, offering diverse experiences from business hubs to wilderness.",
    },
    {
      name: "Maharashtra",
      image:
        "https://images.unsplash.com/photo-1573143950521-36ef5345dae9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Maharashtra blends Mumbai's cosmopolitan energy with Pune's heritage and Ajanta-Ellora's cave artistry. The financial capital dazzles with Marine Drive, Gateway of India, and Bollywood. Hill stations like Matheran and Mahabaleshwar offer cool retreats. Konkan's pristine beaches and Portuguese-influenced architecture contrast with Vidarbha's tiger reserves. Maharashtra's cuisine ranges from Mumbai's vada pav to Kolhapuri spicy delicacies. Festivals like Ganesh Chaturthi showcase vibrant traditions, while the Deccan plateau reveals ancient forts and wine country around Nashik.",
    },
    {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29hfGVufDB8fDB8fHww",
      content:
        "Goa's golden beaches, Portuguese heritage, and laidback vibe make it India's premier coastal destination. Churches of Old Goa and spice plantations contrast with beach shacks and night markets. Water sports thrive at Calangute, while Palolem offers serene beauty. Goa's cuisine blends Portuguese and Konkan flavors in dishes like vindaloo and bebinca. The state's carnival and Christmas celebrations reflect its unique cultural fusion. Beyond beaches, explore Dudhsagar Falls and wildlife sanctuaries. Portuguese-style homes in Fontainhas preserve colonial architecture amidst tropical paradise.",
    },
    {
      name: "Dadra and Nagar Haveli and Daman and Diu",
      image:
        "https://plus.unsplash.com/premium_photo-1694475439235-0a0306a7477b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGFkcmElMjBhbmQlMjBOYWdhciUyMEhhdmVsaSUyMGFuZCUyMERhbWFuJTIwYW5kJTIwRGl1fGVufDB8fDB8fHww",
      content:
        "This union territory combines Portuguese colonial charm with tribal cultures. Daman's beaches and Diu's fortress showcase coastal history, while Dadra's tribal villages preserve ancient traditions. The territory offers quieter alternatives to Goa's beaches with equally stunning coastlines. Portuguese-era churches and Gujarati influences create unique cultural blends. Vanganga Lake Garden and Nakshatra Garden provide peaceful retreats. The territory's liquor production and seafood cuisine attract visitors seeking offbeat experiences. Silvassa, the capital, features tribal museums and scenic waterfalls amidst industrial development.",
    },
  ];

  return (
    <div className="region-page">
      <div
        className="region-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFqYXN0aGFufGVufDB8fDB8fHww)",
        }}
      >
        <h1>Western India</h1>
        <p>
          From Rajasthan's royal heritage to Goa's beaches and Gujarat's
          cultural treasures
        </p>
      </div>

      <div className="states-container">
        {states.map((state, index) => (
          <div
            key={state.name}
            className={`state-section ${
              index % 2 === 0 ? "left-image" : "right-image"
            }`}
          >
            <div className="state-image">
              <img src={state.image} alt={state.name} />
            </div>
            <div className="state-content">
              <h2>{state.name}</h2>
              <p>{state.content}</p>
              <button
                className="cta-button explore-btn"
                onClick={() => {
                  if (window.Tawk_API) {
                    window.Tawk_API.maximize();
                  } else {
                    // Fallback action if Tawk.to isn't loaded
                    window.open("/contact", "_blank"); // Opens contact page in new tab
                  }
                }}
              >
                Explore {state.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WestIndia;
