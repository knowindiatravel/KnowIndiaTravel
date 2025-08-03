import React from "react";
import "./Destinations.css";

const SouthIndia = () => {
  const states = [
    {
      name: "Andhra Pradesh",
      image:
        "https://plus.unsplash.com/premium_photo-1694475122158-5c088fe408ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5kaHJhJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Andhra Pradesh offers Tirupati's sacred temple, Visakhapatnam's beaches, and Hyderabad's shared Nizami culture. The state's Kuchipudi dance and Carnatic music traditions thrive. Araku Valley's coffee plantations and Borra Caves showcase natural wonders. Andhra's fiery cuisine features biryani and Gongura pickles. The ruins of Vijayawada's Buddhist sites and Lepakshi's hanging pillar reveal historical layers. Handicrafts like Kalamkari textiles and Kondapalli toys preserve ancient arts. The state's 974km coastline offers pristine beaches, while the Krishna-Godavari delta forms India's rice bowl.",
    },
    {
      name: "Karnataka",
      image:
        "https://plus.unsplash.com/premium_photo-1697730504977-26847b1f1f91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FybmF0YWthfGVufDB8fDB8fHww",
      content:
        "Karnataka blends Bangalore's tech hubs with Hampi's ruins and Mysore's royal splendor. The state's diverse landscapes range from Coorg's coffee estates to Jog Falls. Hoysala temples at Belur and Halebid showcase intricate stone carvings. Karnataka's cuisine includes dosa variants and Udupi's vegetarian fare. Traditional Yakshagana performances and Dasara festival processions reflect rich heritage. Western Ghats biodiversity includes Bandipur and Nagarhole tiger reserves. Badami's cave temples and Gokarna's beaches offer contrasting experiences. The state preserves both ancient Jain monuments and modern innovation centers.",
    },
    {
      name: "Kerala",
      image:
        "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww",
      content:
        "Kerala's backwaters, Ayurveda, and coconut-lined beaches define tropical paradise. Houseboat cruises in Alleppey, tea plantations in Munnar, and Kathakali performances showcase diverse experiences. Kochi's Chinese fishing nets and Jewish synagogue reflect colonial history. The cuisine features appam with stew and seafood delicacies. Traditional snake boat races and Onam harvest festival highlight vibrant culture. Kerala's 100% literacy and healthcare models attract global interest. The Western Ghats host wildlife like elephants and tigers, while tranquil beaches like Kovalam offer relaxation. The state's communist politics create unique social dynamics.",
    },
    {
      name: "Tamil Nadu",
      image:
        "https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFtaWwlMjBOYWR1fGVufDB8fDB8fHww",
      content:
        "Tamil Nadu's Dravidian culture shines through towering gopurams of Meenakshi Temple and Brihadeeswarar's Chola architecture. Chennai's Marina Beach and Pondicherry's French Quarter offer coastal charm. Hill stations like Ooty and Kodaikanal provide cool retreats. The state's classical dance (Bharatanatyam) and music traditions thrive alongside filter coffee. Pilgrimage sites like Rameswaram attract spiritual seekers. Tamil cinema (Kollywood) influences global pop culture. Chettinad mansions and cuisine reveal merchant community heritage. The state's 2000-year-old Sangam literature remains foundational to South Indian identity.",
    },
    {
      name: "Telangana",
      image:
        "https://images.unsplash.com/photo-1621909321963-2276c9660298?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRlbGFuZ2FuYXxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Telangana, India's youngest state, preserves Hyderabad's Nizami legacy alongside high-tech growth. The iconic Charminar and Golconda Fort showcase Qutb Shahi architecture. Ramoji Film City is the world's largest film studio complex. Telangana's cuisine includes Hyderabadi biryani and Irani chai. The state's tribal areas like Adilabad preserve Gond art forms. Kakatiya-era temples at Warangal feature exquisite stone carvings. Kuchipudi dance originated here, while Bonalu festival showcases folk traditions. The state's IT corridor in HITEC City contrasts with rural handicraft villages producing Bidriware and Pochampally ikat.",
    },
    {
      name: "Puducherry",
      image:
        "https://images.unsplash.com/photo-1597073642928-48c0971f7ded?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Puducherry's French Quarter with colonial villas and tree-lined boulevards creates Mediterranean charm in India. Auroville's experimental township promotes spiritual universalism. The seaside Promenade and Sri Aurobindo Ashram attract seekers. Puducherry's cuisine blends French techniques with South Indian flavors in dishes like creole-style fish curry. The territory's Catholic heritage shows in Gothic churches and Easter processions. Handicrafts include handmade paper and incense production. Nearby Paradise Beach and Chunnambar Boat House offer water activities. The annual Masquerade Festival revives French carnival traditions with local adaptations.",
    },
    {
      name: "Lakshadweep",
      image:
        "https://images.unsplash.com/photo-1683043430721-f4a25e539cd5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TGFrc2hhZHdlZXB8ZW58MHx8MHx8fDA%3D",
      content:
        "Lakshadweep's coral atolls and turquoise lagoons form India's smallest union territory. The islands offer world-class snorkeling and scuba diving among vibrant marine life. Bangaram Atoll's uninhabited beaches provide ultimate seclusion. The territory's Muslim culture blends Keralite and Arab influences. Traditional wooden boats (odams) still ply between islands. Strict entry regulations preserve fragile ecosystems. Local cuisine features coconut-based seafood dishes. Kavaratti's marine aquarium showcases endemic species. The islands' sustainable tourism model limits visitors, making it an exclusive destination for eco-conscious travelers seeking pristine tropical beauty.",
    },
  ];

  return (
    <div className="region-page">
      <div
        className="region-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFtaWwlMjBuYWR1fGVufDB8fDB8fHww)",
        }}
      >
        <h1>Southern India</h1>
        <p>
          From Kerala's backwaters to Tamil Nadu's temples and Karnataka's
          heritage
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

export default SouthIndia;
