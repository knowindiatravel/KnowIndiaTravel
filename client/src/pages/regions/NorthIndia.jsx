import React from "react";
import "./Destinations.css";

const NorthIndia = () => {
  const states = [
    {
      name: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      content:
        "India's capital Delhi blends Mughal heritage with modern dynamism. The Red Fort, Qutub Minar, and Humayun's Tomb showcase its rich history, while Connaught Place and Cyber City represent its contemporary face. Delhi's diverse culinary scene ranges from street food in Chandni Chowk to fine dining. The city hosts vibrant cultural festivals and boasts world-class museums. As the political hub of India, it houses important government buildings including Parliament House and Rashtrapati Bhavan.",
    },
    {
      name: "Haryana",
      image:
        "https://images.unsplash.com/photo-1605469237567-a39930679526?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFyeWFuYXxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Haryana, bordering Delhi, offers a mix of agricultural landscapes and industrial development. Kurukshetra's sacred battlefields and Panipat's historical sites reveal its ancient significance. The state preserves traditional folk dances like Ghoomar and Saang. Gurugram has emerged as a major IT and financial hub with modern skyscrapers. Haryana's rural areas showcase authentic village life, while Sultanpur National Park provides birdwatching opportunities. The state's cuisine features hearty dishes like kadhi pakora and bajra roti.",
    },
    {
      name: "Punjab",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHVuamFifGVufDB8fDB8fHww",
      content:
        "Punjab, the land of five rivers, is famous for its golden temples, fertile fields, and vibrant culture. The Golden Temple in Amritsar attracts pilgrims worldwide, while Jallianwala Bagh memorializes an important historical event. Punjab's bhangra dance and folk music embody its energetic spirit. The state's agricultural heartland produces much of India's wheat. Punjabi cuisine with butter chicken, sarson ka saag, and makki di roti is celebrated globally. Chandigarh, the shared capital, showcases Le Corbusier's modernist architecture.",
    },
    {
      name: "Uttarakhand",
      image:
        "https://images.unsplash.com/photo-1596599623428-87dbae5e7816?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Uttarakhand's Himalayan landscapes encompass pilgrimage sites like the Char Dham and adventure destinations like Rishikesh. The state offers stunning hill stations (Mussoorie, Nainital), national parks (Corbett, Valley of Flowers), and spiritual centers (Haridwar, Badrinath). Trekking routes lead to Hemkund Sahib and Roopkund. Uttarakhand's traditional Kumaoni and Garhwali cultures thrive alongside yoga tourism. Local cuisine includes bhang ki chutney and singodi sweets. The Ganga Aarti in Haridwar is a spectacular spiritual experience.",
    },
    {
      name: "Uttar Pradesh",
      image:
        "https://images.unsplash.com/photo-1706186839147-0d708602587b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXR0YXIlMjBQcmFkZXNofGVufDB8fDB8fHww",
      content:
        "Uttar Pradesh, India's most populous state, hosts the iconic Taj Mahal in Agra and spiritual Varanasi on the Ganges. Lucknow preserves Awadhi culture through its cuisine (kebabs, biryani) and architecture (Bara Imambara). The Kumbh Mela in Prayagraj attracts millions of pilgrims. Buddhist sites in Sarnath mark where Buddha gave his first sermon. UP's handicrafts include Banarasi silk, Chikankari embroidery, and brassware. The state's diverse landscapes range from the Gangetic plains to wildlife reserves like Dudhwa National Park.",
    },
    {
      name: "Himachal Pradesh",
      image:
        "https://plus.unsplash.com/premium_photo-1661963083312-8adde31d9900?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww",
      content:
        "Himachal Pradesh's mountainscapes feature Shimla's colonial charm, Manali's adventure sports, and Dharamshala's Tibetan culture. The state offers apple orchards, snow-capped peaks, and ancient temples like Hadimba Devi. Trekking routes include Triund and Pin Parvati Pass. Winter brings skiing to Solang Valley, while summers offer respite from plains' heat. Toy trains connect scenic routes like Kalka-Shimla. Himachal's wooden architecture, warm hospitality, and local cuisine (siddu, trout fish) create unforgettable Himalayan experiences.",
    },
    {
      name: "Jammu and Kashmir",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFtbXUlMjBhbmQlMjBrYXNobWlyfGVufDB8fDB8fHww",
      content:
        "Jammu and Kashmir's breathtaking landscapes include Srinagar's Dal Lake, Gulmarg's ski slopes, and Pahalgam's meadows. The region's houseboats and Mughal gardens reflect its unique heritage. Jammu's Vaishno Devi shrine attracts millions of pilgrims annually. Kashmiri handicrafts like pashmina shawls and papier-mâché items are renowned globally. The cuisine features aromatic dishes like rogan josh and gustaba. Autumn's golden chinar trees and winter's snow-covered valleys make Kashmir a year-round destination with distinct seasonal charms.",
    },
    {
      name: "Ladakh",
      image:
        "https://plus.unsplash.com/premium_photo-1661962344178-19930ba15492?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFkYWtofGVufDB8fDB8fHww",
      content:
        "Ladakh's stark beauty encompasses Buddhist monasteries (Hemis, Thiksey), high-altitude lakes (Pangong, Tso Moriri), and dramatic mountain passes (Khardung La). The region's Tibetan Buddhist culture thrives in Leh's old town and annual monastic festivals. Adventure seekers enjoy motorbike expeditions and trekking to remote villages. Ladakhi cuisine features thukpa and momos adapted to the cold climate. The Nubra Valley's sand dunes and double-humped camels create surreal landscapes. Stargazing here offers unparalleled views of the Milky Way.",
    },
    {
      name: "Chandigarh",
      image:
        "https://images.unsplash.com/photo-1588669494151-f4c6df6f715b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbmRpZ2FyaHxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Chandigarh, India's first planned city, showcases Le Corbusier's modernist architecture including the Open Hand Monument. The Rock Garden's recycled art installations and Sukhna Lake's waterfront are popular attractions. As capital of both Punjab and Haryana, it blends cultures from both states. The city's sector-based layout features abundant green spaces and cycling tracks. Chandigarh's food scene ranges from street food in Sector 17 to upscale restaurants. Nearby attractions include the Himalayan foothills and Pinjore Gardens.",
    },
  ];

  return (
    <div className="region-page">
      <div
        className="region-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1587474260584-136574528ed5)",
        }}
      >
        <h1>Northern India</h1>
        <p>
          From the Himalayas' majestic peaks to Punjab's golden fields and
          Delhi's historic grandeur
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

export default NorthIndia;
