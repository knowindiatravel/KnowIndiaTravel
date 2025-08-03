import React, { useState } from "react";
import "./TravelTabs.css";

const TravelTabs = () => {
  const [activeTab, setActiveTab] = useState("Beaches");

  const destinations = {
    Beaches: [
      {
        name: "Palolem Beach",
        location: "Goa",
        price: "₹3,200",
        imageUrl:
          "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFsb2xlbSUyMEJlYWNofGVufDB8fDB8fHww",
      },
      {
        name: "Radhanagar Beach",
        location: "Andaman & Nicobar Islands",
        price: "₹6,150",
        imageUrl:
          "https://images.unsplash.com/photo-1599325601183-042bed55081c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFkaGFuYWdhciUyMEJlYWNofGVufDB8fDB8fHww",
      },
      {
        name: "Kovalam Beach",
        location: "Kerala",
        price: "₹3,600",
        imageUrl:
          "https://images.unsplash.com/photo-1647938272908-564861fe4f49?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S292YWxhbSUyMEJlYWNofGVufDB8fDB8fHww",
      },
      {
        name: "Marina Beach",
        location: "Chennai, Tamil Nadu",
        price: "₹1,700",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1678131188332-693a503680ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFyaW5hQmVhY2h8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Tarkarli Beach",
        location: "Maharashtra",
        price: "₹2,500",
        imageUrl:
          "https://images.unsplash.com/photo-1674481491462-e9d410a4ea41?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRhcmthcmxpJTIwQmVhY2h8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Varkala Beach",
        location: "Kerala",
        price: "₹3,800",
        imageUrl:
          "https://images.unsplash.com/photo-1677216713977-50421d083abf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmFya2FsYSUyMEJlYWNofGVufDB8fDB8fHww",
      },
    ],
    "Heritage & Culture": [
      {
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        price: "₹4,500",
        imageUrl:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      },
      {
        name: "Hampi",
        location: "Karnataka",
        price: "₹3,800",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFtcGl8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Khajuraho",
        location: "Madhya Pradesh",
        price: "₹4,200",
        imageUrl:
          "https://images.unsplash.com/photo-1708627664712-85087ba123bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2hhanVyYWhvfGVufDB8fDB8fHww",
      },
      {
        name: "Konark Sun Temple",
        location: "Odisha",
        price: "₹3,500",
        imageUrl:
          "https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S29uYXJrJTIwU3VuJTIwVGVtcGxlfGVufDB8fDB8fHww",
      },
      {
        name: "Ajanta & Ellora Caves",
        location: "Maharashtra",
        price: "₹4,000",
        imageUrl:
          "https://images.unsplash.com/photo-1696550029619-10fa9c5a7501?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWphbnRhJTIwJTI2JTIwRWxsb3JhJTIwQ2F2ZXN8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Fatehpur Sikri",
        location: "Uttar Pradesh",
        price: "₹3,900",
        imageUrl:
          "https://images.unsplash.com/photo-1697644297524-ee2e2e098f37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmF0ZWhwdXIlMjBTaWtyaXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    "Hill Stations": [
      {
        name: "Shimla",
        location: "Himachal Pradesh",
        price: "₹5,200",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1697729628826-ca05ca7f5e8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2hpbWxhfGVufDB8fDB8fHww",
      },
      {
        name: "Manali",
        location: "Himachal Pradesh",
        price: "₹5,500",
        imageUrl:
          "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuYWxpfGVufDB8fDB8fHww",
      },
      {
        name: "Ooty",
        location: "Tamil Nadu",
        price: "₹4,800",
        imageUrl:
          "https://images.unsplash.com/photo-1638886540342-240980f60d25?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T290eXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Munnar",
        location: "Kerala",
        price: "₹4,500",
        imageUrl:
          "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVubmFyfGVufDB8fDB8fHww",
      },
      {
        name: "Darjeeling",
        location: "West Bengal",
        price: "₹5,000",
        imageUrl:
          "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Coorg",
        location: "Karnataka",
        price: "₹5,300",
        imageUrl:
          "https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29vcmd8ZW58MHx8MHx8fDA%3D",
      },
    ],
    "Wildlife & Nature": [
      {
        name: "Ranthambore National Park",
        location: "Rajasthan",
        price: "₹6,500",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFudGhhbWJvcmUlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Jim Corbett National Park",
        location: "Uttarakhand",
        price: "₹7,200",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1661817083646-cf3a6f24f040?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SmltJTIwQ29yYmV0dCUyME5hdGlvbmFsJTIwUGFya3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Kaziranga National Park",
        location: "Assam",
        price: "₹6,800",
        imageUrl:
          "https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2F6aXJhbmdhJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww",
      },
      {
        name: "Periyar Wildlife Sanctuary",
        location: "Kerala",
        price: "₹5,900",
        imageUrl:
          "https://images.unsplash.com/photo-1633704688032-1080af36063a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVyaXlhciUyMFdpbGRsaWZlJTIwU2FuY3R1YXJ5fGVufDB8fDB8fHww",
      },
      {
        name: "Sundarbans National Park",
        location: "West Bengal",
        price: "₹6,200",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1686310335921-38acc0679321?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VuZGFyYmFucyUyME5hdGlvbmFsJTIwUGFya3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Bandipur National Park",
        location: "Karnataka",
        price: "₹6,000",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1675847898176-824143229880?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFuZGlwdXIlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
      },
    ],
    Pilgrimage: [
      {
        name: "Varanasi",
        location: "Uttar Pradesh",
        price: "₹3,800",
        imageUrl:
          "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmFyYW5hc2l8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Golden Temple",
        location: "Amritsar, Punjab",
        price: "₹4,000",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29sZGVuJTIwVGVtcGxlfGVufDB8fDB8fHww",
      },
      {
        name: "Tirupati",
        location: "Andhra Pradesh",
        price: "₹4,200",
        imageUrl:
          "https://images.unsplash.com/photo-1741003412854-bd4b264c4af3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRpcnVwYXRpfGVufDB8fDB8fHww",
      },
      {
        name: "Shirdi",
        location: "Maharashtra",
        price: "₹3,500",
        imageUrl:
          "https://images.unsplash.com/photo-1707733580929-19bf89c7ede6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hpcmRpfGVufDB8fDB8fHww",
      },
      {
        name: "Vaishno Devi",
        location: "Jammu & Kashmir",
        price: "₹5,000",
        imageUrl:
          "https://images.unsplash.com/photo-1719377678428-d9bcec6976f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmFpc2hubyUyMERldml8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Bodh Gaya",
        location: "Bihar",
        price: "₹3,700",
        imageUrl:
          "https://images.unsplash.com/photo-1667883643074-31b942669d08?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9kaCUyMEdheWF8ZW58MHx8MHx8fDA%3D",
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="travel-tabs-container">
      <div className="travel-tabs-content">
        <div className="travel-tabs-header">
          <h2>Explore Incredible India</h2>
          <p>Discover amazing destinations across our diverse country</p>
        </div>

        <div className="travel-tabs-nav">
          {Object.keys(destinations).map((tab) => (
            <button
              key={tab}
              className={`travel-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="travel-destinations-grid">
          {destinations[activeTab].map((destination, index) => (
            <div key={index} className="destination-card">
              <div className="destination-image">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  loading="lazy"
                />
                <div className="price-badge">{destination.price}</div>
              </div>
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <p className="location">{destination.location}</p>
                <p className="price-label">avg. nightly price</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTabs;
