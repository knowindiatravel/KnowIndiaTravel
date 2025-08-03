import React from "react";
import "./Destinations.css";

const EastIndia = () => {
  const states = [
    {
      name: "West Bengal",
      image:
        "https://plus.unsplash.com/premium_photo-1697730497487-7bda47e4baff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VzdCUyMGJlbmdhbHxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "West Bengal's cultural capital Kolkata boasts colonial architecture, Durga Puja festivities, and intellectual heritage. The Sundarbans mangrove forests shelter Royal Bengal tigers, while Darjeeling's tea gardens offer Himalayan vistas. Bengali cuisine features fish delicacies and sweets like rasgulla. Terracotta temples of Bishnupur and Shantiniketan's art institutions preserve traditional arts. The state's literary and cinematic contributions remain unparalleled, from Tagore's works to Satyajit Ray's films. Kolkata's Howrah Bridge and tram network symbolize its unique urban character, blending British-era legacy with contemporary energy.",
    },
    {
      name: "Bihar",
      image:
        "https://images.unsplash.com/photo-1631984876480-f821262c2609?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmloYXJ8ZW58MHx8MHx8fDA%3D",
      content:
        "Bihar's Buddhist circuit includes Bodh Gaya's Mahabodhi Temple where Buddha attained enlightenment. Nalanda's ancient university ruins and Patna Museum preserve historical treasures. The state's Madhubani paintings and folk theater represent vibrant traditions. Chhath Puja's riverbank rituals showcase spiritual fervor. Bihar's cuisine features sattu drinks and litti chokha, while Sonepur Fair remains Asia's largest cattle fair. The Vikramshila Gangetic Dolphin Sanctuary protects endangered species. Modern Bihar blends ancient heritage with educational hubs like Patna's science center and upcoming Buddhist meditation parks.",
    },
    {
      name: "Jharkhand",
      image:
        "https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amhhcmtoYW5kfGVufDB8fDB8fHww",
      content:
        "Jharkhand's tribal heartland features lush forests, cascading waterfalls, and rich mineral resources. The state's indigenous communities like Santhals preserve unique art forms and harvest festivals. Netarhat's hill station offers panoramic views, while Betla National Park hosts tigers and elephants. Jharkhand's metal crafts and bamboo work reflect tribal craftsmanship. Dassam Falls and Hundru Falls provide scenic retreats. The state capital Ranchi boasts tribal museums and Jagannath Temple. Local cuisine includes rice-based dishes and forest produce. Jharkhand's industrial cities like Jamshedpur contrast with untouched tribal villages maintaining ancient lifestyles.",
    },
    {
      name: "Odisha",
      image:
        "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2Rpc2hhfGVufDB8fDB8fHww",
      content:
        "Odisha's Sun Temple at Konark and Jagannath Temple in Puri showcase architectural brilliance. The state's classical Odissi dance and Pattachitra paintings represent ancient art forms. Chilika Lake, Asia's largest brackish water lagoon, attracts migratory birds. Tribal cultures thrive in Koraput region, while golden beaches line the coast. Odisha's temple cuisine, especially the Mahaprasad of Puri, offers unique vegetarian flavors. Silver filigree and appliqué handicrafts maintain centuries-old techniques. The state's Ratha Yatra festival draws millions, and Bhitarkanika National Park protects saltwater crocodiles in mangrove ecosystems.",
    },
    {
      name: "Andaman and Nicobar Islands",
      image:
        "https://images.unsplash.com/photo-1642498232612-a837df233825?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW5kYW1hbiUyMGFuZCUyME5pY29iYXIlMjBJc2xhbmRzfGVufDB8fDB8fHww",
      content:
        "Andaman's turquoise waters, coral reefs, and colonial history create a tropical paradise. Port Blair's Cellular Jail memorializes India's freedom struggle, while Havelock Island offers Radhanagar Beach's pristine sands. Scuba diving reveals vibrant marine life, and limestone caves dot Baratang Island. The indigenous tribes preserve ancient traditions in isolation. Ross Island's British ruins and Mahatma Gandhi Marine National Park showcase diverse attractions. The islands' seafood cuisine and relaxed vibe provide perfect getaways. Neil Island's natural bridges and Chidiya Tapu's sunsets offer unforgettable experiences in this ecological wonderland.",
    },
  ];

  return (
    <div className="region-page east-india">
      <div
        className="region-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1575392884524-304bbe4af54b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlc3QlMjBiZW5nYWx8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <h1>Eastern India</h1>
        <p>
          From Bengal's cultural heritage to Odisha's temples and Andaman's
          pristine islands
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

export default EastIndia;
